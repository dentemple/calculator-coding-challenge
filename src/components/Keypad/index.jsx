import React from 'react'
import styled from 'styled-components'

import InputKey from './InputKey'
import BUTTONS from './BUTTONS'

const Keypad = () => (
  <StyledSection>
    {BUTTONS.map(button => (
      <InputKey readOnly key={button.value} {...button} />
    ))}
  </StyledSection>
)

const StyledSection = styled.section`
  /* display */
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;

  /* box */
  padding: 10px;
`

export default Keypad
