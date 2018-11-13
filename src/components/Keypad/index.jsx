import React from 'react'
import styled from 'styled-components'

import InputKey from './InputKey'

const StyledSection = styled.section``

const Keypad = () => (
  <StyledSection>
    <InputKey value={0} />
    <InputKey value={1} />
    <InputKey value={2} />
    <InputKey value={3} />
    <InputKey value={4} />
  </StyledSection>
)

export default Keypad
