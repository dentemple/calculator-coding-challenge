import React from 'react'
import MyComponent from '../../Keypad'

describe('components', () => {
  describe('Keypad', () => {
    it('renders without crashing', () => {
      shallow(<MyComponent />)
    })
  })
})
