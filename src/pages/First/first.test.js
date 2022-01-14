import React from 'react'
import { screen, render, cleanup, userEvent } from '../../shared/utils/test-utils'

// Component
import First from './index'

afterEach(()=> {
    cleanup()
})

it('First page render', () => {
    render(<First />)

    expect(screen.getByText(/First page body/i)).toBeInTheDocument() //check can find 'First page body'
})

it('First page go private', () => {
    render(<First />)

    expect(screen.getByText(/Go private/i)).toBeInTheDocument() //check can find 'Go private' button
    userEvent.click(screen.getByText(/Go private/i)) //click on the button
    expect(screen.queryByText(/Go private/i)).not.toBeInTheDocument() //check cant find 'Go private' button
    expect(screen.getByText(/Remove private/i)).toBeInTheDocument() //check can find 'Remove private' button
})

it('First page remove private', () => {
    render(<First />, { initialState: { privateReducer: { isPrivate: true }}}) //render the component with custom state (isPrivate)

    expect(screen.getByText(/Remove private/i)).toBeInTheDocument() //check can find 'Remove private' button
    userEvent.click(screen.getByText(/Remove private/i)) //click on the button
    expect(screen.queryByText(/Remove private/i)).not.toBeInTheDocument() //check cant find 'Remove private' button
    expect(screen.getByText(/Go private/i)).toBeInTheDocument() //check can find 'Go private' button
})