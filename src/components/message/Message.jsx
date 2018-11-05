import React, {Component} from 'react'

import request from 'superagent'
import Button from '../Button'
import message from '../../fonts-and-images/send.svg'
import './message.scss'

class Message extends Component {
  constructor () {
    super ()
    this.state = {
      screen : ''
    }
    this.sendMessage = this.sendMessage.bind(this)
  }

  inputUpdate (e) {
    var entry = e.target.value
    this.setState({
      screen: entry
    })
  }

  sendMessage () {
    this.sendRequest()
    this.setState({
      screen: ''
    }, () => {
      this.props.clear('message')
    })
  }

  sendRequest () {
    request.post('/api/outgoing/sms')
      .send({Message: this.state.screen, To: this.props.to})
      .then(r => r)
  }

  render () {
    return (
      <div>
        <div className='screen'>
          <textarea className='screen' type='text'
            value={this.state.screen}
            onChange={e => this.inputUpdate(e)}/>
        </div>
        <Button className='item'
          value={<img src={message}/>} clickHandler={this.sendMessage}/>
      </div>
    )}
}

export default Message