import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import Controls from './Controls'

const funcProps = {
    toggleClosed: jest.fn(),
    toggleLocked: jest.fn(),
    clearSpies: function(){
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

    expect(defaultProps.toggleClosed).toHaveBeenCalled()
    expect(defaultProps.toggleLocked).toHaveBeenCalledTimes(0)

    defaultProps.clearSpies()
})

test('lock button is clickable with closed locked props', () => {
    const { getByTestId } = render(<Controls {...closedLockedProps} />)
    
    fireEvent.click(getByTestId('button-lock'))

    expect(defaultProps.toggleLocked).toHaveBeenCalledTimes(1)

    defaultProps.clearSpies()
})
