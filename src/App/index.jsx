import React, { Component } from 'react'
import styled from 'styled-components'

import Calculator from './Calculator'

// Dev only
import RenderStore from '../util/RenderStore'

const Display = styled.div`
  /* display */
  display: flex;
  flex-direction: column;
  align-items: center;

  /* text */
  font-family: sans-serif;
`

const App = () => (
  <Display>
    <Calculator />
    <footer>
      <RenderStore />
    </footer>
  </Display>
)

export default App
