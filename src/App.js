import React, { Component } from 'react';
import './App.css';

import Button from './button.jsx'

class App extends Component {
  constructor () {
    super()
    this.state = {
      screen: '',
      errorStatus: false,
      errorValue: ''
    }
    this.enterOne = this.enterOne.bind(this)
    this.enterTwo = this.enterTwo.bind(this)
    this.enterThree = this.enterThree.bind(this)
    this.enterFour = this.enterFour.bind(this)
    this.enterFive = this.enterFive.bind(this)
    this.enterSix = this.enterSix.bind(this)
    this.enterSeven = this.enterSeven.bind(this)
    this.enterEight = this.enterEight.bind(this)
    this.enterNine = this.enterNine.bind(this)
    this.enterZero = this.enterZero.bind(this)
    this.enterClear = this.enterClear.bind(this)
  }
  enterOne () {
    this.setState({
      screen: this.state.screen.concat(1)
    })
  }
  enterTwo () {
    this.setState({
      screen: this.state.screen.concat(2)
    })
  }
  enterThree () {
    this.setState({
      screen: this.state.screen.concat(3)
    })
  }

  enterFour () {
    this.setState({
      screen: this.state.screen.concat(4)
    })
  }

  enterFive () {
    this.setState({
      screen: this.state.screen.concat(5)
    })
  }

  enterSix () {
    this.setState({
      screen: this.state.screen.concat(6)
    })
  }

  enterSeven () {
    this.setState({
      screen: this.state.screen.concat(7)
    })
  }

  enterEight () {
    this.setState({
      screen: this.state.screen.concat(8)
    })
  }

  enterNine () {
    this.setState({
      screen: this.state.screen.concat(9)
    })
  }

  enterZero () {
    this.setState({
      screen: this.state.screen.concat(0)
    })
  }

  enterClear () {
    this.setState({
      screen: ''
    })
  }

  render() {
    return (
      <div className="App">
        <h1 className='header'>Burner</h1>
        <div class='screen'><div>{this.state.screen}</div></div>
        <div class='grid-container-50-half'>
          <Button class='item one'
            clickHandler={this.enterOne} value={1} />
          <Button class='item two'
            clickHandler={this.enterTwo} value={2} />
          <Button class='item three'
            clickHandler={this.enterThree} value={3} />
          <Button class='item four'
            clickHandler={this.enterFour} value={4} />
          <Button class='item five'
            clickHandler={this.enterFive} value={5} />
          <Button class='item six'
            clickHandler={this.enterSix} value={6} />
          <Button class='item seven'
            clickHandler={this.enterSeven} value={7} />
          <Button class='item eight'
            clickHandler={this.enterEight} value={8} />
          <Button class='item nine'
            clickHandler={this.enterNine} value={9} />
          <Button class='item zero'
            clickHandler={this.enterZero} value={0} />
          <Button class='item clear'
            clickHandler={this.enterClear} value={'C'} />
        </div>
      </div>
    );
  }
}

export default App;
