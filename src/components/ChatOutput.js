import React from 'react'
import { observer } from 'mobx-react'

import store from '../store'
import { Avatar, ChatEntry, Message, Wrapper } from './ChatOutputComponents'

const ChatOutput = () => (
  <Wrapper>
    <div ref={ el => store.messageEl = el }>
      {
        store.messages.map(({ avatarUrl, lines }, i) => (
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

export default observer(ChatOutput)
