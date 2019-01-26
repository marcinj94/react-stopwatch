import React, { Component } from 'react';
import './App.css';
import Header from './Header/Header';

class App extends Component {
  render() {
    return (
      <>
        <Header />


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
