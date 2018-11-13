import React from 'react'
import MyComponent from '../InputKey'

describe('components', () => {
  describe('InputKey', () => {
    it('renders without crashing', () => {
      shallow(<MyComponent />)
    })
  })
})
