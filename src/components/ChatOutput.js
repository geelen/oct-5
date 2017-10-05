import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  height: calc(100vh - 4rem);
  overflow: hidden;
  display: flex;
  flex-direction: column;
	justify-content: flex-end;
	> div {
    overflow-y: scroll;
  }
`

const ChatEntry = styled.div`
  display: flex;
  align-items: flex-start;
`
const Avatar = styled.img`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  padding: 1rem;
`
const Message = styled.div`
  flex-grow: 1;
  margin: 1rem 1rem 1rem 0;
  align-self: stretch;
  line-height: 1.5;
`

const ChatOutput = ({ messages, messageElementCallback }) => (
  <Wrapper>
    <div ref={ el => messageElementCallback(el) }>
      {
        messages.map(({ avatarUrl, lines }, i) => (
          <ChatEntry key={i}>
            <Avatar src={avatarUrl}/>
            <Message>
              {
                lines.map((line, i) => (
                  <div key={i}>{line}</div>
                ))
              }
            </Message>
          </ChatEntry>
        ))
      }
    </div>
  </Wrapper>
)

export default ChatOutput
