import React, { Component } from 'react';
import './App.css';

import Call from './components/call/Call'
import Message from './components/message/Message'

class App extends Component {
  constructor () {
    super()
    this.state = {
      call: true,
    }
  }

  render() {
    return (
      <div className="App">
        <h1 className='header'>Burner</h1>
        <Call/>
        <Message/>
        <div>Icons made by <a href="https://www.flaticon.com/authors/smashicons" title="Phone call">Phone call</a> from <a href="https://www.flaticon.com/"     title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/"     title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
      </div>
    );
  }
}

export default App;
