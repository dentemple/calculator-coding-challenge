import React from 'react'
import MyComponent from '../InputKey'

import { Provider } from 'react-redux'
import configureStore from '../../../state/store'

describe('components', () => {
  describe('InputKey', () => {
    const store = configureStore()

    it('renders without crashing', () => {
      shallow(
        <Provider store={store}>
          <MyComponent />
        </Provider>
      )
    })
  })
})
