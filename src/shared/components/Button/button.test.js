import React from 'react'
import { screen, render, cleanup, fireEvent, userEvent } from '../../utils/test-utils'

// Component
import { Button } from './index'

afterEach(()=> {
    cleanup()
})

it('Button render', () => {
    render(<Button>Test Button</Button>)

    expect(screen.getByText(/Test Button/i)).toBeInTheDocument()
})

it('Button click event', async () => {
    const mockCallBack = jest.fn() //create the mock function
    render(<Button onClick={mockCallBack}>Test Button</Button>) //render de component with the onClick.

    userEvent.click(screen.getByText(/Test Button/i)) //fire the click event with userEvent
    await fireEvent.click(screen.getByText(/Test Button/i)) //fire the click event with fireEvent.
    expect(mockCallBack.mock.calls.length).toEqual(2) //check if the mock fn have calls.
})