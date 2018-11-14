import { combineReducers } from 'redux'

import calculatorReducer from './calculatorReducer'
import testReducer from './testReducer'

const reducers = combineReducers({
  calculator: calculatorReducer,
  test: testReducer
})

export default reducers
