import React from 'react'
import { screen, render, cleanup } from '../../../shared/utils/test-utils'

// Component
import { DefaultLayout } from './index'

afterEach(()=> {
    cleanup()
})

it('Default render', () => {
    render(<DefaultLayout>Hello There</DefaultLayout>)

    expect(screen.getByText(/Hello There/i)).toBeInTheDocument() //check can find 'Hello There' as the child    
    expect(screen.getByText(/First/i)).toBeInTheDocument() //check can find 'First' from the navbar

    const header = screen.getByTestId(/default_header/i)
    const body = screen.getByTestId(/default_body/i)

    expect(header.getElementsByTagName('nav')).toBeTruthy() // can find element 'nav' on header
    expect(body).toHaveTextContent(/Hello There/i) // can find 'Hello There' (the child) on the body

})