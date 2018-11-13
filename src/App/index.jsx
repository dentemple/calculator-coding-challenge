import React, { Component } from 'react'
import styled from 'styled-components'

import { Title } from '../components'

// Dev only
import RenderStore from '../util/RenderStore'

const Container = styled.div`
  font-family: sans-serif;
`

class App extends Component {
  render() {
    return (
      <Container>
        <Title />
        <footer>
          <RenderStore />
        </footer>
      </Container>
    )
  }
}

export default App
