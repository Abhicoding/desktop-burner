import React, {Component} from 'react'

import request from 'superagent'

import './message.scss'

class Message extends Component {
  constructor () {
    super ()
    this.state = {
      screen : ''
    }
  }

  inputUpdate (e) {
    var entry = e.target.value
    this.setState({
      screen: entry
    })
  }

  render () {
    return (
      <div>
        <div className='screen'>
          <textarea className='screen' type='text'
            value={this.state.screen}
            onChange={e => this.inputUpdate(e)}/>
        </div>
        {/* <Button className='item'
          value={<img src={phoneCall}/>} clickHandler={this.makeCall}/>
        <Button className='item'
          value={<img src={phoneHangup}/>} clickHandler={this.makeCall}/> */}
      </div>
    )}
}

export default Message