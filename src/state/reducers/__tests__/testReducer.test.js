import { TYPES } from '../../types'
import reducer, { initialState } from '../testReducer'

describe('reducers', () => {
  describe('testReducer', () => {
    it('should return the initial state', () => {
      expect(reducer(undefined, {})).toEqual(initialState)
    })

    it('should handle TEST_DISPATCH', () => {
      expect(
        reducer(undefined, {
          type: TYPES.TEST_DISPATCH
        })
      ).toEqual({
        ...initialState,
        str: 'Action successfully dispatched!',
        val: initialState.val + 1
      })
    })
  })
})
