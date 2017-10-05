import React from 'react'
import { observer } from 'mobx-react'

import store from '../store'
import { Wrapper } from './ChatOutputComponents'
import ChatEntry from './ChatEntry'

const ChatOutput = () => (
  <Wrapper>
    <div ref={ el => store.messageEl = el }>
      {
        store.messages.map((entry, i) => (
          <ChatEntry key={i} entry={entry}/>
        ))
      }
    </div>
  </Wrapper>
)

export default observer(ChatOutput)
