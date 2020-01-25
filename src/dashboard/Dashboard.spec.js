import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { intitialState } from '../redux/initialState'
import { rootReducer } from '../redux/reducers'

import Dashboard from './Dashboard'

// This function creates our store, with the possibility of passing different states
const renderWithRedux = (component, state) => {
    const store = createStore(rootReducer, state)

    return {
        ...render(<Provider store={store}>{component}</Provider>),
        store,
    }
}

test('can render with redux with defaults', () => {
    const { getByTestId } = renderWithRedux(<Dashboard />, intitialState)

    expect(getByTestId('display-closed')).toHaveTextContent('Open')
    expect(getByTestId('display-locked')).toHaveTextContent('Unlocked')
})

test('clicking toggle buttons in right order changes locked display', () => {
    const { getByTestId } = renderWithRedux(<Dashboard />, intitialState)

    fireEvent.click(getByTestId('button-close'))
    fireEvent.click(getByTestId('button-lock'))

    expect(getByTestId('display-closed')).toHaveTextContent('Closed')
    expect(getByTestId('display-locked')).toHaveTextContent('Locked')
})

test('clicking toggle buttons in wrong order does not change locked display', () => {
    const { getByTestId } = renderWithRedux(<Dashboard />, intitialState)

    fireEvent.click(getByTestId('button-lock'))
    fireEvent.click(getByTestId('button-close'))

    expect(getByTestId('display-closed')).toHaveTextContent('Closed')
    expect(getByTestId('display-locked')).toHaveTextContent('Unlocked')
})