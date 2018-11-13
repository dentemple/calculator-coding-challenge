import React from 'react'
import styled from 'styled-components'

const StyledInput = styled.input`
  /* box */
  border: 1px solid #ced4da;
  border-radius: 5px;
  padding: 0.2em 0.5em;
  width: 68%;

  /* text */
  font-size: 1.4em;
  text-align: right;
`

const MainInput = () => <StyledInput readOnly value={0} />

export default MainInput
