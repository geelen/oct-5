import React from 'react'
import { observer } from 'mobx-react'
import styled from 'styled-components'

import { Avatar, ChatLine, Message } from './ChatOutputComponents'

const InlineImage = styled.img`
  max-width: 80%;
  max-height: 80vh;
  margin: 1rem auto;
`

const Line = ({ line }) => {
  const matches = /(.*)(https?:\/\/[\S]+)(.*)/.exec(line)
  if (matches) {
    const [_, before, link, after] = matches
    return (
      <div>
        {before}
        {' '}<a href={link}>{link}</a>{' '}
        {after}
        <div>
          <a href={link}>
            <InlineImage src={link} alt="Image referenced in text"/>
          </a>
        </div>
      </div>
    )
  }

  return <div>{line}</div>
}

const ChatEntry = ({ entry: { avatarUrl, lines } }) => (
  <ChatLine>
    <Avatar src={avatarUrl}/>
    <Message>
      {
        lines.map((line, i) => (
          <Line key={i} line={line}/>
        ))
      }
    </Message>
  </ChatLine>
)

export default observer(ChatEntry)
