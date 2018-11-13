import React from 'react'
import MyComponent from '../SubInput'

describe('components', () => {
  describe('SubInput', () => {
    it('renders without crashing', () => {
      shallow(<MyComponent />)
    })
  })
})
