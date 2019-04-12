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
    this.sendMessageOnEnter = this.sendMessageOnEnter.bind(this);
    this.changeInputMessage = this.changeInputMessage.bind(this);
  }

  sendMessageOnEnter(event) {
    let { messageInput, messages } = this.state;

    const updateMessages =  event.key === 'Enter' && messageInput
      ? [...messages, { text: messageInput }]
      : [...messages];

    if (event.key === 'Enter') {
      messageInput = '';
    }

   this.setState({ messages: updateMessages, messageInput }); 
  }

  changeInputMessage(event) {
    this.setState({ messageInput: event.target.value });
  }

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
          onKeyPress={event => sendMessageOnEnter(event)} 
          onChange={event => changeInputMessage(event)}
          value={messageInput}/>
      </div>
    )
  }
}

export default Chat;