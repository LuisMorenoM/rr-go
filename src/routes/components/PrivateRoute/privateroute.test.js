import React from 'react'
import { screen, render, cleanup } from '../../../shared/utils/test-utils'

// Component
import { PrivateRoute } from './index'

const componentToRender = () => {
    return (
        <div>Hello There</div>
    )
}

afterEach(()=> {
    cleanup()
})

it('PrivateRoute render default', () => {
    render(<PrivateRoute path="/" component={componentToRender} />)

    expect(screen.queryByText(/Hello There/i)).not.toBeInTheDocument() //check cant find 'Hello There'
})

it('PrivateRoute with private off, gets component', () => {
    render(<PrivateRoute path="/" component={componentToRender} />, { initialState: { privateReducer: { isPrivate: false }}})

    expect(screen.queryByText(/Hello There/i)).not.toBeInTheDocument() //check cant find 'Hello There'
})

it('PrivateRoute with private on, gets component', () => {
    render(<PrivateRoute path="/" component={componentToRender} />, { initialState: { privateReducer: { isPrivate: true }}})

    expect(screen.getByText(/Hello There/i)).toBeInTheDocument() //check can find 'Hello There'
})