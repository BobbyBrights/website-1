import React, { Component } from 'react'
import styled from 'styled-components'

const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`

class Blog extends Component {
    render() {
        return <Container><h1>{this.props.match.params.id}</h1></Container>
    }
}

export default Blog
