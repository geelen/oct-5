import React from 'react'
import styled from 'styled-components'
import ChatOutput from './ChatOutput'
import ChatInput from './ChatInput'

const Container = styled.div`
  height: 100vh;
  width: 100vw;
`

class ChatApp extends React.Component {
  state = {
    messages: [
      {
        avatarUrl: 'https://fillmurray.com/96/96',
        lines: [
          'A couple of lines.',
          'Of text'
        ]
      }
    ]
  }

  handleNewMessage = (newMessage) => {
    this.setState({
      messages: this.state.messages.concat({
        avatarUrl: 'https://fillmurray.com/80/80',
        lines: [
          newMessage
        ]
      })
    })
  }

  render() {
    return (
      <Container>
        <ChatOutput messages={this.state.messages}/>
        <ChatInput onNewMessage={this.handleNewMessage}/>
      </Container>
    )
  }
}

export default ChatApp
