import { TYPES } from '../../types'
import reducer, { initialState } from '../calculatorReducer'

describe('reducers', () => {
  describe('calculatorReducer', () => {
    it('should return the initial state', () => {
      expect(reducer(undefined, {})).toEqual(initialState)
    })

    it('should handle ADD_NUMBER', () => {
      const value = '42'
      let store = reducer(undefined, {
        type: TYPES.ADD_NUMBER,
        value
      })
      expect(store).toEqual({
        ...initialState,
        current: initialState.current + value
      })
    })

    it('should handle ADD_DECIMAL', () => {
      const value = '42'
      let store = reducer(undefined, {
        type: TYPES.ADD_NUMBER,
        value
      })
      store = reducer(store, {
        type: TYPES.ADD_DECIMAL
      })

      expect(store).toEqual({
        ...initialState,
        current: initialState.current + value + '.'
      })
    })

    it('should handle ADD_OPERATION', () => {
      const value = '+'
      let store = reducer(undefined, {
        type: TYPES.ADD_NUMBER,
        value: '42'
      })
      store = reducer(store, {
        type: TYPES.ADD_OPERATION,
        value
      })

      expect(store).toEqual({
        ...initialState,
        builder: '42' + value
      })
    })

    it('should handle CLEAR_ALL', () => {
      const value = '42'
      let store = reducer(undefined, {
        type: TYPES.ADD_NUMBER,
        value
      })
      store = reducer(store, {
        type: TYPES.CLEAR_ALL
      })

      expect(store).toEqual({
        ...initialState
      })
    })

    it('should handle STORE_MEMORY', () => {
      const value = '42'
      let store = reducer(undefined, {
        type: TYPES.ADD_NUMBER,
        value
      })
      store = reducer(store, {
        type: TYPES.STORE_MEMORY
      })

      expect(store).toEqual({
        ...initialState,
        memory: value
      })
    })

    it('should handle RETRIEVE_MEMORY', () => {
      const value = '42'
      let store = reducer(undefined, {
        type: TYPES.ADD_NUMBER,
        value
      })
      store = reducer(store, {
        type: TYPES.STORE_MEMORY
      })
      store = reducer(store, {
        type: TYPES.RETRIEVE_MEMORY
      })

      expect(store).toEqual({
        ...initialState,
        current: '42',
        memory: '42'
      })
    })

    it('should handle CLEAR_MEMORY', () => {
      const value = '42'
      let store = reducer(undefined, {
        type: TYPES.ADD_NUMBER,
        value
      })
      store = reducer(store, {
        type: TYPES.STORE_MEMORY
      })
      store = reducer(store, {
        type: TYPES.CLEAR_MEMORY
      })

      expect(store).toEqual({
        ...initialState
      })
    })

    it('should handle RUN_OPERATIONS', () => {
      const value = '42'
      const operation = '+'
      let store = reducer(undefined, {
        type: TYPES.ADD_NUMBER,
        value
      })
      store = reducer(store, {
        type: TYPES.ADD_OPERATION,
        value: operation
      })
      store = reducer(store, {
        type: TYPES.ADD_NUMBER,
        value
      })
      store = reducer(store, {
        type: TYPES.RUN_OPERATIONS,
        value
      })

      expect(store).toEqual({
        ...initialState,
        current: eval(value + operation + value) + ''
      })
    })
  })
})
