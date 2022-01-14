import React from 'react'
import { screen, render, cleanup } from '../../../shared/utils/test-utils'

// Component
import { BasicRoute } from './index'

const componentToRender = () => {
    return (
        <div>Hello There</div>
    )
}

afterEach(()=> {
    cleanup()
})

it('BasicRoute render', () => {
    render(<BasicRoute path="/" component={componentToRender} />)

    expect(screen.getByText(/Hello There/i)).toBeInTheDocument() //check can find 'Hello There'
})

it('BasicRoute with private off, gets component', () => {
    render(<BasicRoute path="/" component={componentToRender} />, { initialState: { privateReducer: { isPrivate: false }}})

    expect(screen.getByText(/Hello There/i)).toBeInTheDocument() //check can find 'Hello There'
})

it('BasicRoute with private on, gets component', () => {
    render(<BasicRoute path="/" component={componentToRender} />, { initialState: { privateReducer: { isPrivate: true }}})

    expect(screen.getByText(/Hello There/i)).toBeInTheDocument() //check can find 'Hello There'
})