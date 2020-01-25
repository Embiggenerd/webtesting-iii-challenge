import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import Display from './Display'

const defaultProps = { locked: false, closed: false }
const closedUnlockedProps = { locked: false, closed: true }

test('can render with redux with defaults', () => {
    const { getByTestId } = render(<Display {...defaultProps} />)
    // fireEvent.click(getByText('+'))
    expect(getByTestId('display-closed')).toHaveTextContent('Open')
    expect(getByTestId('display-locked')).toHaveTextContent('Unlocked')
})

test('can render with redux with defaults', () => {
    const { getByTestId } = render(<Display {...closedUnlockedProps} />)
    // fireEvent.click(getByText('+'))
    expect(getByTestId('display-closed')).toHaveTextContent('Open')
    expect(getByTestId('display-locked')).toHaveTextContent('Unlocked')
})