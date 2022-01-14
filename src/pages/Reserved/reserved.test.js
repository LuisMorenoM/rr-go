import React from 'react'
import { screen, render, cleanup, userEvent, waitForElementToBeRemoved } from '../../shared/utils/test-utils'

// Component
import Reserved from './index'

/**
 *  TO TEST A REAL API FETCH WE SHOULD USE MSW
 * https://testing-library.com/docs/react-testing-library/example-intro/
 */

afterEach(()=> {
    cleanup()
})

it('Reserved page render', () => {
    render(<Reserved />)
    expect(screen.getByText(/Reserved page/i)).toBeInTheDocument() //check can find 'Reserved page'
})

it('getting initial weather', async () => {
    render(<Reserved />)

    expect(screen.getByText(/Fetching.../i)).toBeInTheDocument() // its fetching
    expect(await screen.findByText(/Today is/i, {}, { timeout: 2500 })).toBeInTheDocument() //getting weather
    expect(screen.queryByText(/Fetching.../i)).not.toBeInTheDocument() //no more fetching
})  

it('getting weather manually', async () => {
    render(<Reserved />)

    expect(await screen.findByText(/Get Weather Manually/i, {}, { timeout: 2500 })).toBeInTheDocument() // waiting for the button to appear

    userEvent.click(screen.getByText(/Get Weather Manually/i)) //click on the button to fetch manually

    expect(screen.getByText(/Fetching.../i)).toBeInTheDocument() // fetching appears
    await waitForElementToBeRemoved(() => screen.queryByText(/Fetching.../i), { timeout: 2500 }) // fetching disappears after the fetch.
}) 