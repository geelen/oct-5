import React from 'react'
import { observer } from 'mobx-react'

import { Avatar, ChatLine, Message } from './ChatOutputComponents'

const ChatEntry = ({ entry: { avatarUrl, lines } }) => (
  <ChatLine>
    <Avatar src={avatarUrl}/>
    <Message>
      {
        lines.map((line, i) => (
          <div key={i}>{line}</div>
        ))
      }
    </Message>
  </ChatLine>
)

export default observer(ChatEntry)
