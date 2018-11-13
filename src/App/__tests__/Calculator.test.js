import React from 'react'
import MyComponent from '../Calculator'

describe('components', () => {
  describe('Calculator', () => {
    it('renders without crashing', () => {
      shallow(<MyComponent />)
    })
  })
})
