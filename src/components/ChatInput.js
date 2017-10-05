import React from 'react'
import { SubmitButton, TextInput, Wrapper } from './ChatInputComponents'

class ChatInput extends React.Component {
  state = { currentMessage: '' }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.onNewMessage(this.state.currentMessage)
    this.setState({ currentMessage: '' })
  }

  handleChange = (e) => {
    this.setState({
      currentMessage: e.target.value
    })
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
