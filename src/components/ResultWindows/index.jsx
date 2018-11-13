import React from 'react'
import styled from 'styled-components'

import MainInput from './MainInput'
import SubInput from './SubInput'

const StyledDiv = styled.div`
  /* display */
  display: flex;
  flex-direction: column;
  align-items: center;
`

const ResultWindows = () => (
  <StyledDiv>
    <MainInput />
    <SubInput />
  </StyledDiv>
)

export default ResultWindows
