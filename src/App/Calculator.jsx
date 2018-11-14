import React from 'react'
import styled from 'styled-components'

import { Keypad, ResultWindows, Title } from '../components'

const Calculator = () => (
  <StyledForm onSubmit={e => e.preventDefault()}>
    <Title />
    <ResultWindows />
    <Keypad />
  </StyledForm>
)

const StyledForm = styled.form`
  /* box */
  background-color: #dfd8d0;
  border: 1px solid #444444;
  border-radius: 20px;
  box-shadow: 0 -10px 50px #999999 inset;
  margin-top: 40px;
  padding: 0 0 15px;
  width: 350px;

  /* text */
  font-family: monospace;
  text-align: center;
`

export default Calculator
