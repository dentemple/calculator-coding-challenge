import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const SubInput = ({ value }) => <StyledInput readOnly value={value} />

const StyledInput = styled.input`
  /* box */
  background-color: #f1f1f1;
  border: 1px solid #ced4da;
  border-radius: 5px;
  padding: 0.2em 0.5em;
  width: 68%;

  /* text */
  color: #444444;
  font-size: 1em;
  text-align: right;
`

SubInput.propTypes = {
  value: PropTypes.string
}

export default SubInput
