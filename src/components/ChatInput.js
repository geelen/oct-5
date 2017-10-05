import React from 'react'
import { observable } from 'mobx'
import { observer } from 'mobx-react'

import { SubmitButton, TextInput, Wrapper } from './ChatInputComponents'
import { addCurrentMessageToStore } from '../store'

const store = observable({
  currentMessage: ''
})

const handleSubmit = (e) => {
  e.preventDefault()
  addCurrentMessageToStore()
  store.currentMessage = ''
}

const handleChange = (e) => {
  store.currentMessage = e.target.value
}

const ChatInput = () => (
  <form onSubmit={handleSubmit}>
    <Wrapper>
      <TextInput>
        <input type="text"
               name="message"
               required
               value={store.currentMessage}
               onChange={handleChange}/>
      </TextInput>
      <SubmitButton type="submit">➡</SubmitButton>
    </Wrapper>
  </form>
)

export default observer(ChatInput)
