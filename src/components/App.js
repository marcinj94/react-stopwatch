import React, { Component } from 'react';
import './App.css';
import Header from './Header/Header';
import Stopwatch from './Stopwatch/Stopwatch';

class App extends Component {

  state = {
    miliseconds: 0,
    seconds: 0,
    minutes: 0,
    btnActive: false,
    savedResults: [
    ]
  }

  runStopwatch = () => {
    if (this.state.miliseconds < 99) {
      this.setState(prevState => ({
        miliseconds: prevState.miliseconds + 1
      }));
    } else if (this.state.seconds >= 59) {
      this.setState(prevState => ({
        miliseconds: 0,
        seconds: 0,
        minutes: prevState.minutes + 1
      }));
    } else if (this.state.miliseconds >= 99) {
      this.setState(prevState => ({
        miliseconds: 0,
        seconds: prevState.seconds + 1
      }));
    }
  }

  handleButtonStartPauseClick = () => {
    if (this.state.btnActive) {
      clearInterval(this.intervalIndex);
    } else {
      this.intervalIndex = setInterval(this.runStopwatch, 10)
    }
    this.setState(prevState => ({
      btnActive: !prevState.btnActive
    }));
  }

  handleButtonResetClick = () => {
    this.setState((prevState) => ({
      miliseconds: 0,
      seconds: 0,
      minutes: 0,
      btnActive: false,
    }));
    clearInterval(this.intervalIndex);
  }

  handleButtonSaveClick = () => {
    this.setState(prevState => {
      const savedResults = prevState.savedResults.concat({
        miliseconds: prevState.miliseconds,
        seconds: prevState.seconds,
        minutes: prevState.minutes
      })
      return {
        savedResults
      }
    });
  }

  handleButtonCleanListClick = () => {
    this.setState((prevState) => ({
      savedResults: [],
    }));
  }

  render() {
    return (
      <>
        <Header />
        <Stopwatch
          miliseconds={this.state.miliseconds}
          seconds={this.state.seconds}
          minutes={this.state.minutes}
          btnActive={this.state.btnActive}
          savedResults={this.state.savedResults}
          clickStartPause={this.handleButtonStartPauseClick}
          clickReset={this.handleButtonResetClick}
          clickSaveResult={this.handleButtonSaveClick}
          clickCleanList={this.handleButtonCleanListClick}
        />
      </>
    );
  }
}

export default App;
