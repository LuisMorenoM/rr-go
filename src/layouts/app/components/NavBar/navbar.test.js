import React from 'react'
import { screen, render, cleanup, userEvent } from '../../../../shared/utils/test-utils'

// Component
import { NavBar } from './index'

afterEach(()=> {
    cleanup()
})

it('NavBar render private off', () => {
    render(<NavBar />, { initialState: { privateReducer: { isPrivate: false }}})
    
    // check private is off.
    expect(screen.getByText(/First/i)).toBeInTheDocument()
    expect(screen.queryByText(/PRIVATE ON/i)).not.toBeInTheDocument()
})

it('NavBar render private on', () => {
    render(<NavBar />, { initialState: { privateReducer: { isPrivate: true }}})
    
    // check private is on.
    expect(screen.getByText(/First/i)).toBeInTheDocument()
    expect(screen.getByText(/PRIVATE ON/i)).toBeInTheDocument()
})

it('NavBar remove private', async () => {
    render(<NavBar />, { initialState: { privateReducer: { isPrivate: true }}})

    // check private is on.
    expect(screen.getByText(/PRIVATE ON/i)).toBeInTheDocument()
    // click on button to remove private
    userEvent.click(screen.getByText(/Remove private/i)) //fire the click event with userEvent
    // check private is off
    expect(screen.queryByText(/PRIVATE ON/i)).not.toBeInTheDocument()
});