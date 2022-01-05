import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { render as rtlRender } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
// import '@testing-library/jest-dom'; // jest-dom is imported on src/setupTests.js

// Import own reducer and history
import reducers from '../../state/redux/reducers'; // to access rest of reducers
import { history } from '../../state/redux/configureStore'; // get history to create the store.

//custom render that includes redux provider
const render = ( 
    ui, 
    {
        initialState, 
        store = createStore(reducers(history), initialState), 
        ...renderOptions
    } = {}
) => {
    const Wrapper = ({ children }) => {
        return <Provider store={store}>{children}</Provider>
    }

    return rtlRender(ui, { wrapper: Wrapper, ...renderOptions })
}

// re-export everything
export * from '@testing-library/react'
// override render method and export userEvent
export { render, userEvent }