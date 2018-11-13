import React from 'react'
import ReactDOM from 'react-dom'

import { AppContainer } from 'react-hot-loader'

import { Provider } from 'react-redux'
import configureStore from './state/store'

import 'normalize.css'

const store = configureStore()

const render = () => {
  // Configure for Hot Module Reloading
  const App = require('./App').default
  // Send to the DOM
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <App />
      </Provider>
    </AppContainer>,
    document.getElementById('root')
  )
}

// Activate Hot Module Reloading
if (process.env.NODE_ENV !== 'production') {
  module.hot.accept('./App', () => {
    render()
  })
}

render()
