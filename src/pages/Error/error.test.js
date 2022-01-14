import React from 'react'
import { screen, render, cleanup } from '../../shared/utils/test-utils'

// Component
import Error from './index'

afterEach(()=> {
    cleanup()
})

it('Error page render', () => {
    render(<Error />)

    expect(screen.getByText(/Error page body/i)).toBeInTheDocument() //check can find 'Error page body'
})