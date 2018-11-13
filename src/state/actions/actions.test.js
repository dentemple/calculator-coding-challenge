import { testDispatch } from '../actions'
import { TYPES } from '../types'

describe('actions', () => {
  it('should create an action without a payload', () => {
    const expectedAction = {
      type: TYPES.TEST_DISPATCH
    }
    expect(testDispatch()).toEqual(expectedAction)
  })
})
