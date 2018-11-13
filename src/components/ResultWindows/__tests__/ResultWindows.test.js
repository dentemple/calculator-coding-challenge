import React from 'react'
import MyComponent from '../../ResultWindows'

describe('components', () => {
  describe('ResultWindows', () => {
    it('renders without crashing', () => {
      shallow(<MyComponent />)
    })
  })
})
