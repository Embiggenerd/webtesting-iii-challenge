import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import Display from './Display'

const defaultProps = { locked: false, closed: false }
const closedUnlockedProps = { locked: false, closed: true }
const closedLockedProps = { locked: true, closed: true }

test('can render with default props with green-led class', () => {
    const { getByTestId } = render(<Display {...defaultProps} />)

    expect(getByTestId('display-closed')).toHaveClass('green-led')
    expect(getByTestId('display-locked')).toHaveClass('green-led')
    expect(getByTestId('display-closed')).toHaveTextContent('Open')
    expect(getByTestId('display-locked')).toHaveTextContent('Unlocked')
})

test('displays closed, unlocked correctly', () => {
    const { getByTestId } = render(<Display {...closedUnlockedProps} />)

    expect(getByTestId('display-closed')).toHaveTextContent('Closed')
    expect(getByTestId('display-locked')).toHaveTextContent('Unlocked')
})

test('can render with closed locked defaults with red-led class', () => {
    const { getByTestId } = render(<Display {...closedLockedProps} />)

    expect(getByTestId('display-closed')).toHaveClass('red-led')
    expect(getByTestId('display-locked')).toHaveClass('red-led')
    expect(getByTestId('display-closed')).toHaveTextContent('Closed')
    expect(getByTestId('display-locked')).toHaveTextContent('Locked')
})