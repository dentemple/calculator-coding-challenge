import React from 'react'
import MyComponent from '../../ResultWindows'

import { Provider } from 'react-redux'
import configureStore from '../../../state/store'

describe('components', () => {
  describe('ResultWindows', () => {
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
