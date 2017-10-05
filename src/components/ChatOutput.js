import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  height: calc(100vh - 4rem);
  overflow: hidden;
  display: flex;
  flex-direction: column;
	justify-content: flex-end;
`

const SecondWrapper = styled.div`
  overflow-y: scroll;
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
    <SecondWrapper innerRef={ el => messageElementCallback(el) }>
      {
        messages.map(({ avatarUrl, lines }) => (
          <ChatEntry>
            <Avatar src={avatarUrl}/>
            <Message>
              {
                lines.map(line => (
                  <div>{line}</div>
                ))
              }
            </Message>
          </ChatEntry>
        ))
      }
    </SecondWrapper>
  </Wrapper>
)

export default ChatOutput
