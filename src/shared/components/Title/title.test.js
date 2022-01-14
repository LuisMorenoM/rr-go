import React from 'react'
import { screen, render, cleanup } from '../../utils/test-utils'

// Component
import { Title } from './index'

afterEach(()=> {
    cleanup()
})

it('Title render', () => {
    render(<Title>Test Title</Title>)

    expect(screen.getByText(/Test Title/i)).toBeInTheDocument()
})