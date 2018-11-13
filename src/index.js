import React from 'react'
import ReactDOM from 'react-dom'

import { AppContainer } from 'react-hot-loader'

const render = () => {
  // Configure for Hot Module Reloading
  const NextRootContainer = require('./App').default
  // Send to the DOM
  ReactDOM.render(
    <AppContainer>
      <NextRootContainer />
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
