import React, { Component } from 'react';
import './App.css';

import Call from './components/call/Call'
import Message from './components/message/Message'

class App extends Component {
  constructor () {
    super()
    this.state = {
      call: '',
      message: ''
    }
    this.clear = this.clear.bind(this)
    this.update = this.update.bind(this)
  }

  clear (flag) {
    var value = {}
    value[flag] = ''
    this.setState(Object.assign(this.state, value))
  }

  update (flag, input) {
    var value = {}
    value[flag] = input
    this.setState(Object.assign(this.state, value))
  }

  render() {
    return (
      <div className="App">
        <h1 className='header'>Burner</h1>
        <Call clear={this.clear} update={this.update} />
        <Message clear={this.clear} update={this.update} to={this.state.call}/>
        <div>Icons made by <a href="https://www.flaticon.com/authors/smashicons" title="Phone call">Phone call</a> from <a href="https://www.flaticon.com/"     title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/"     title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
      </div>
    );
  }
}

export default App;
