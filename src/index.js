import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'


// Redux
import { store, history } from './state/redux/configureStore'

// Layout
import { DefaultLayout } from './layouts/app'

// Router
import Router from './routes'

// Styles
import './styles/_index.scss'


ReactDOM.render(
  <Provider store={store}>
      <ConnectedRouter history={history}>
          <DefaultLayout>
              <Router />
          </DefaultLayout>
      </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals(console.log);
