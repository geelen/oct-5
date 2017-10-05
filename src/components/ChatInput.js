import React from 'react'
import { SubmitButton, TextInput, Wrapper } from './ChatInputComponents'

const ChatInput = () => (
  <Wrapper>
    <TextInput>
      <input type="text"/>
    </TextInput>
    <SubmitButton type="button">➡</SubmitButton>
  </Wrapper>
)

export default ChatInput
