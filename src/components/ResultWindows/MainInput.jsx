import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const MainInput = ({ value }) => <StyledInput readOnly value={value} />

const StyledInput = styled.input`
  /* box */
  border: 1px solid #ced4da;
  border-radius: 5px;
  padding: 0.2em 0.5em;
  width: 85%;

  /* text */
  font-size: 1.4em;
  text-align: right;
`

MainInput.propTypes = {
  value: PropTypes.string
}

export default MainInput
