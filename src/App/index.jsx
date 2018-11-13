import React, { Component } from 'react'
import styled from 'styled-components'

import { Title } from '../components'

const Container = styled.div`
  font-family: sans-serif;
`

class App extends Component {
  render() {
    return (
      <Container>
        <Title />
      </Container>
    )
  }
}

export default App
