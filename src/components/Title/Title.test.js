import React from 'react'
import MyComponent from '../Title'

describe('components', () => {
  describe('Title', () => {
    it('renders without crashing', () => {
      shallow(<MyComponent />)
    })
  })
})
