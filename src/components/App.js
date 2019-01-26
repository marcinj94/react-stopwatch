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

  render() {
    return (
      <>
        <Header />
        <Stopwatch
          miliseconds={this.state.miliseconds}
          seconds={this.state.seconds}
          minutes={this.state.minutes}
          clickStartPause={this.handleButtonStartPauseClick}
          clickReset={this.handleButtonResetClick}
          btnActive={this.state.btnActive}

        />


        {/* <header>
          <h1>React.js Stopwatch</h1>
        </header>

        <div className="stopwatch">
          <div className="buttons">
            <button>Start/Pauza</button>
            <button>Save</button>
            <button>Reset</button>
            <button>Clear list</button>
          </div>

          <div className="result">
            <span>00:00:00</span>
          </div>

          <div className="tableResults">
            <h2>Saved results:</h2>
            <ul>
              <li>00:12:12</li>
            </ul>
          </div>
        </div> */}
      </>
    );
  }
}

export default App;
