import { TYPES } from '../types'

export const testDispatch = () => ({
  type: TYPES.TEST_DISPATCH
})

export const pressKeypad = value => {
  switch (value) {
    case 'MC':
      return {
        type: TYPES.CLEAR_MEMORY
      }
    case 'MR':
      return {
        type: TYPES.RETRIEVE_MEMORY
      }
    case 'MS':
      return {
        type: TYPES.STORE_MEMORY
      }
    case '÷':
    case '×':
    case '+':
    case '-':
      let replacer
      if (value === '×') replacer = '*'
      if (value === '÷') replacer = '/'
      return {
        type: TYPES.ADD_OPERATION,
        value: replacer ? replacer : value
      }
    case 'C':
      return {
        type: TYPES.CLEAR_ALL
      }
    case '=':
      return {
        type: TYPES.RUN_OPERATIONS
      }
    case '.':
      return {
        type: TYPES.ADD_DECIMAL
      }
    default:
      return {
        type: TYPES.ADD_NUMBER,
        value
      }
  }
}
