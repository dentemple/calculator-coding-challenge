import { createStore, applyMiddleware } from 'redux'

import reducers from '../reducers'

function configureStore(preloadedState) {
  const store = createStore(
    reducers,
    preloadedState,
    // Configure Redux Devtools Extension: No middleware option
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )

  // Extends Hot Module Reloading to the Redux store
  if (process.env.NODE_ENV !== 'production') {
    if (module.hot) {
      module.hot.accept('../reducers', () => {
        const newreducers = require('../reducers').default
        store.replaceReducer(newreducers)
      })
    }
  }

  return store
}

export default configureStore
