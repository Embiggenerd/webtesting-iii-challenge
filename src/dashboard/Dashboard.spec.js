import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { intitialState } from '../redux/initialState'
import { rootReducer } from '../redux/reducers'

import Dashboard from './Dashboard'

const renderWithRedux = (component, state) => {
    const store = createStore(rootReducer, state)

    return {
        ...render(<Provider store={store}>{component}</Provider>),
        // adding `store` to the returned utilities to allow us
        // to reference it in our tests (just try to avoid using
        // this to test implementation details).
        store,
    }
}

test('can render with redux with defaults', () => {
    const { getByTestId, getByText } = renderWithRedux(<Dashboard />, intitialState)
    // fireEvent.click(getByText('+'))
    expect(getByTestId('display-closed')).toHaveTextContent('Open')
    expect(getByTestId('display-locked')).toHaveTextContent('Unlocked')
})