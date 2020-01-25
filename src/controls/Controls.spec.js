import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import Controls from './Controls'

const funcProps = {
    toggleClosed: jest.fn(),
    toggleLocked: jest.fn(),
    clearSpies: function(){ // Since we are using a singleton for prop functions, we have to clear between tests
        this.toggleClosed.mockClear()
        this.toggleLocked.mockClear()
    }
}

const defaultProps = {
    ...funcProps,
    locked: false,
    closed: false
}

const closedLockedProps = {
    ...funcProps,
    locked: true,
    closed: true
}

test('renders with default props and correct text buttons', () => {
    const { getByTestId } = render(<Controls {...defaultProps} />)
    
    expect(getByTestId('button-close')).toHaveTextContent('Close')
    expect(getByTestId('button-lock')).toHaveTextContent('Lock')
})

test('renders with closed licked props and correct text in buttons', () => {
    const { getByTestId } = render(<Controls {...closedLockedProps} />)
    
    expect(getByTestId('button-close')).toHaveTextContent('Open')
    expect(getByTestId('button-lock')).toHaveTextContent('Unlock')
})

test('close button is clickable but lock button is not with default props', () => {
    const { getByTestId } = render(<Controls {...defaultProps} />)
    
    fireEvent.click(getByTestId('button-close'))
    fireEvent.click(getByTestId('button-lock'))

    expect(funcProps.toggleClosed).toHaveBeenCalled()
    expect(funcProps.toggleLocked).toHaveBeenCalledTimes(0)

    funcProps.clearSpies()
})

test('lock button is clickable, close it disabled with closed locked props', () => {
    const { getByTestId } = render(<Controls {...closedLockedProps} />)
    
    fireEvent.click(getByTestId('button-close'))
    fireEvent.click(getByTestId('button-lock'))

    expect(funcProps.toggleLocked).toHaveBeenCalledTimes(1)
    expect(funcProps.toggleClosed).toHaveBeenCalledTimes(0)

    funcProps.clearSpies()
})
