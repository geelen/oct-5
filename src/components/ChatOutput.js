import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  height: calc(100vh - 4rem);
`

const ChatEntry = 'div'
const Avatar = 'div'
const Message = 'div'

const ChatOutput = () => (
  <Wrapper>
    <ChatEntry>
      <Avatar/>
      <Message/>
    </ChatEntry>
  </Wrapper>
)

export default ChatOutput
