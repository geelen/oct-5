import React from 'react'
import styled from 'styled-components'
import ChatOutput from './ChatOutput'
import ChatInput from './ChatInput'

const Container = styled.div`
  min-height: 100vh;
`

class ChatApp extends React.Component {
  render() {
    return (
      <Container>
        <ChatOutput/>
        <ChatInput/>
      </Container>
    )
  }
}

export default ChatApp
