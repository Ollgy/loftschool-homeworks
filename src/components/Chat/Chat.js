import React from 'react';
import { Component } from 'react';
import Message from '../Message/';
import './Chat.css';

class Chat extends Component {

  constructor(props) {
    super(props);
    this.state = {
      messageInput: '',
      messages: []
    }
  }

  sendMessageOnEnter = event => {
    let { messageInput, messages } = this.state;

    if (event.key === 'Enter' && messageInput) {
      this.setState({ messages:  [...messages, { text: messageInput }], messageInput: '' }); 
    }
  }

  changeInputMessage = event =>
    this.setState({ messageInput: event.target.value });

  render() {
    const { messages, messageInput } = this.state;
    const { changeInputMessage, sendMessageOnEnter } = this;

    return (
      <div className='chat'>
        <div className='messages'>
          <ul className='message-list'>
            { messages.map((msg, i) => 
              <li className='message-item' key={i}>
                <Message  text={msg.text}/>
              </li>
            )}
          </ul>
        </div>
        <input className='input-message'
          value={messageInput} 
          onKeyPress={event => sendMessageOnEnter(event)} 
          onChange={event => changeInputMessage(event)}/>
      </div>
    )
  }
}

export default Chat;