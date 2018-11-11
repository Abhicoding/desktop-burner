import React, {Component} from 'react'

import request from 'superagent'
import Button from '../Button.jsx'
import phoneCall from '../../fonts-and-images/phone.svg'
import phoneHangup from '../../fonts-and-images/phone-hangup.svg'
import block from '../../fonts-and-images/block.svg'

import './call.scss'

class Call extends Component {
  constructor () {
    super ()
    this.state = {
      screen : '',
    }
    this.makeCall = this.makeCall.bind(this)
    this.hangupCall = this.hangupCall.bind(this)
    this.block = this.block.bind(this)

  }

  inputUpdate (e) {
    var entry = e.key
    console.log(isInt(entry))
    if (isInt(entry)) {
      this.setState({
        screen: this.state.screen + entry
      }, () => this.props.update('call', this.state.screen))
    }
    if (entry === 'Backspace') {
      this.setState({
        screen: this.state.screen.slice(1)
      }, () => this.props.update('call', this.state.screen))
    }
  }

  makeCall () {
    request.get('/api/outgoing/call')
      .query({To: this.state.screen})
      .then(r => {
        if (r.status === 200) return this.props.notify('Calling...')
        return this.props.notify('Failed to Call')
      })
  }

  hangupCall () {
    this.setState({
      screen: ''
    }, () => this.props.clear('call'))
  }

  block () {
    request.get('/api/block')
      .query({block: this.state.screen})
      .then(r => {
        if (r.status === 200) return this.props.notify('Number blocked')
        return this.props.notify('Failed to block')
      })
    this.hangupCall()
    
  }

  render () {
    return (
      <div>
        <div className='screen'>
          <input className='screen' type='text' 
            onChange={()=> '_'}                   // This is here to allow value to be mutable
            value={this.state.screen}
            onKeyDown={e => this.inputUpdate(e)}/>
        </div>
        <Button className='item'
          value={<img src={phoneCall}/>} clickHandler={this.makeCall}/>
        <Button className='item'
          value={<img src={phoneHangup}/>} clickHandler={this.hangupCall}/>
        <Button className='item'
          value={<img src={block}/>} clickHandler={this.block}/>
      </div>
    )}
}

function isInt(value) {
  return !isNaN(value) && (function(x) { return (x | 0) === x; })(parseFloat(value))
}

export default Call