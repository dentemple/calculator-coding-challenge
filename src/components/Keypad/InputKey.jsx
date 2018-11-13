import React from 'react'
import styled from 'styled-components'

const StyledInput = styled.input`
  /* box */
  background-color: #007bff;
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

const InputKey = props => <StyledInput type="submit" {...props} />

export default InputKey
