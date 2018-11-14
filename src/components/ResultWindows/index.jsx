import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { connect } from 'react-redux'

import MainInput from './MainInput'
import SubInput from './SubInput'

const ResultWindows = ({ builder, current, hasMemory }) => (
  <StyledDiv>
    <MainRow>
      {hasMemory && <span>M</span>}
      <MainInput value={current} />
    </MainRow>
    <SubInput value={builder} />
  </StyledDiv>
)

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const MainRow = styled.div``

const mapState = ({ calculator }) => ({
  builder: calculator.builder,
  current: calculator.current,
  hasMemory: calculator.memory !== null
})

ResultWindows.propTypes = {
  builder: PropTypes.string,
  current: PropTypes.string,
  hasMemory: PropTypes.bool
}

export default connect(mapState)(ResultWindows)
