import React from 'react'
import { Switch } from 'react-router' // react-router v4

// Components
import { BasicRoute, PrivateRoute } from './components';

// Pages
import First from '../pages/First'
import Second from '../pages/Second'
import Reserved from '../pages/Reserved'
import Error from '../pages/Error'

const Router = () => {
    return (
        <Switch>
            <BasicRoute exact path="/" component={First} />
            <BasicRoute exact path="/second" component={Second} />
            <PrivateRoute exact path="/reserved" component={Reserved} />
            <BasicRoute path="*" component={Error} />
        </Switch>
    )
}

export default Router;