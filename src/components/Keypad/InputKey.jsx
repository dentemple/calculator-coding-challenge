import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { connect } from 'react-redux'
import { pressKeypad } from '../../state/actions'

const InputKey = ({ handleClick, value, ...rest }) => (
  <StyledInput
    type="submit"
    value={value}
    onClick={() => {
      handleClick(value)
    }}
    {...rest}
  />
)

const StyledInput = styled.input`
  /* display */
  flex: 0 0 21%;

  /* box */
  background-color: ${({ backgroundColor }) =>
    backgroundColor ? backgroundColor : '#007bff'};
  border-radius: 5px;
  box-shadow: 0px 3px 0px 0px #222121, inset -1px -3px 10px 1px #515151;
  margin: 5px;
  height: 50px;
  width: 50px;

  /* text */
  color: #ffffff;
  font-size: 16px;
  font-weight: bold;
`

const mapDispatch = dispatch => ({
  handleClick: value => {
    dispatch(pressKeypad(value))
  }
})

InputKey.propTypes = {
  backgroundColor: PropTypes.string,
  handleClick: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired
}

export default connect(
  null,
  mapDispatch
)(InputKey)
