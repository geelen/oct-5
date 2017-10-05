import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  height: 4rem;
  background: hsl(25,40%,92%);
  display: flex;
  align-items: center;
  overflow: hidden;
`

const TextInput = styled.div`
  flex-grow: 1;
`
const SubmitButton = styled.button`
  box-shadow: none;
  border: none;
  font-size: 1.25rem;
  margin: 1rem 2rem;
  transform: rotate(-90deg);
  width: 2.5rem;
  height: 4.5rem;
  border-radius: 0.5rem;
  background-color: mediumseagreen;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  
  &:hover {
    box-shadow: -1px 1px 2px rgba(0,0,0,0.5);
  }
  &:active {
    position: relative;
    top: 1px;
    left: 1px;
    box-shadow: none;
  }
`

const ChatInput = () => (
  <Wrapper>
    <TextInput/>
    <SubmitButton type="button">➡</SubmitButton>
  </Wrapper>
)

export default ChatInput
