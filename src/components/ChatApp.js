import React from 'react'
import styled from 'styled-components'
import ChatOutput from './ChatOutput'
import ChatInput from './ChatInput'

const Container = styled.div`
  height: 100vh;
  width: 100vw;
`

const MY_AVATAR = 'https://fillmurray.com/80/80'
let BILL_MURRAY = 'https://fillmurray.com/96/96'

class ChatApp extends React.Component {
  state = {
    messages: [
      {
        avatarUrl: BILL_MURRAY,
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
        avatarUrl: MY_AVATAR,
        lines: [
          newMessage
        ]
      })
    })
    requestAnimationFrame(() => {
      if (this.messageEl) this.messageEl.scrollTop = 100000
    })
  }

  messageElementCallback = el => {
    this.messageEl = el
  }

  render() {
    return (
      <Container>
        <ChatOutput messages={this.state.messages}
                    messageElementCallback={this.messageElementCallback}/>
        <ChatInput onNewMessage={this.handleNewMessage}/>
      </Container>
    )
  }
}

export default ChatApp
