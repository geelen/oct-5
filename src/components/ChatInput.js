import React from 'react'
import { SubmitButton, TextInput, Wrapper } from './ChatInputComponents'
import { handleNewMessage } from '../store'

class ChatInput extends React.Component {
  state = { currentMessage: '' }

  handleSubmit = (e) => {
    e.preventDefault()
    handleNewMessage(this.state.currentMessage)
    this.setState({ currentMessage: '' })
  }

  handleChange = (e) => {
    this.setState({ currentMessage: e.target.value })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <Wrapper>
          <TextInput>
            <input type="text"
                   name="message"
                   required
                   value={this.state.currentMessage}
                   onChange={this.handleChange}/>
          </TextInput>
          <SubmitButton type="submit">➡</SubmitButton>
        </Wrapper>
      </form>
    )
  }
}

export default ChatInput
