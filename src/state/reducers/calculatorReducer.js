import { TYPES } from '../types'

export const initialState = {
  builder: '',
  current: '',
  memory: null
}

function calculatorReducer(state = initialState, action) {
  switch (action.type) {
    case TYPES.CLEAR_ALL:
      return {
        ...initialState,
        memory: state.memory
      }

    case TYPES.ADD_NUMBER:
      return {
        ...state,
        current: state.current + action.value
      }

    case TYPES.ADD_DECIMAL:
      const hasDecimal = state.current.indexOf('.') > -1
      return {
        ...state,
        current: hasDecimal ? state.current : state.current + '.'
      }

    case TYPES.ADD_OPERATION:
      return {
        ...state,
        builder: state.current + action.value,
        current: initialState.current
      }

    case TYPES.STORE_MEMORY:
      const isEmpty = state.current === '' || state.current === null
      return {
        ...state,
        current: initialState.current,
        memory: isEmpty ? state.memory : state.current
      }

    case TYPES.RETRIEVE_MEMORY:
      const isNull = state.memory === null
      return {
        ...state,
        current: isNull ? '' : state.memory
      }

    case TYPES.CLEAR_MEMORY:
      return {
        ...state,
        memory: initialState.memory
      }

    case TYPES.RUN_OPERATIONS:
      return {
        ...state,
        builder: initialState.builder,
        current: state.builder ? eval(state.builder + state.current) + '' : ''
      }

    default:
      return state
  }
}

export default calculatorReducer
