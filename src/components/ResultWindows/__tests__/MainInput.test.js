import React from 'react'
import MyComponent from '../MainInput'

describe('components', () => {
  describe('MainInput', () => {
    it('renders without crashing', () => {
      shallow(<MyComponent />)
    })
  })
})
