import React from 'react'
import { screen, render, cleanup } from '../../shared/utils/test-utils'

// Component
import Second from './index'

afterEach(()=> {
    cleanup()
})

it('Second page render', () => {
    render(<Second />)

    expect(screen.getByText(/Second page body/i)).toBeInTheDocument() //check can find 'Second page body'
})