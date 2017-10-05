import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  height: 4rem;
  background: hsl(25,40%,92%);
  display: flex;
  align-items: center;
`

const TextInput = styled.div`
  flex-grow: 1;
`
const SubmitButton = styled.div`
  font-size: 1.5rem;
  padding: 1rem;
`

const ChatInput = () => (
  <Wrapper>
    <TextInput/>
    <SubmitButton>➡</SubmitButton>
  </Wrapper>
)

export default ChatInput
