import { pressKeypad, testDispatch } from '../actions'
import { TYPES } from '../types'

describe('actions', () => {
  describe('testDispatch', () => {
    it('should run the test dispatch successfully', () => {
      const expectedAction = {
        type: TYPES.TEST_DISPATCH
      }
      expect(testDispatch()).toEqual(expectedAction)
    })
  })

  describe('pressKeypad', () => {
    it('should handle numbers', () => {
      const expectedAction = {
        type: TYPES.ADD_NUMBER,
        value: 42
      }
      expect(pressKeypad(42)).toEqual(expectedAction)
    })

    it('should handle clearing the memory', () => {
      const expectedAction = {
        type: TYPES.CLEAR_MEMORY
      }
      expect(pressKeypad('MC')).toEqual(expectedAction)
    })

    it('should handle retrieving the memory', () => {
      const expectedAction = {
        type: TYPES.RETRIEVE_MEMORY
      }
      expect(pressKeypad('MR')).toEqual(expectedAction)
    })

    it('should handle storing the memory', () => {
      const expectedAction = {
        type: TYPES.STORE_MEMORY
      }
      expect(pressKeypad('MS')).toEqual(expectedAction)
    })

    it('should handle operations', () => {
      const expectedAction = {
        type: TYPES.ADD_OPERATION,
        value: '+'
      }
      expect(pressKeypad('+')).toEqual(expectedAction)
    })

    it('should handle replacing non-eval operations with their eval counterparts', () => {
      const expectedAction = {
        type: TYPES.ADD_OPERATION,
        value: '/'
      }
      expect(pressKeypad('÷')).toEqual(expectedAction)
    })
  })
})
