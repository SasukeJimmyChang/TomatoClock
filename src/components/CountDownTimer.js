
import React from "react";
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
// export const CountDownTimer = () => {
//   return (
//     <div className="App">
//       <header className="App-header">
//         {/* <img src={logo} className="App-logo" alt="logo" /> */}
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React DDDdd
//         </a>
//       </header>
//     </div>
//   )
// };

export class CountDownTimer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      initMin: 1,
      initSec: 0,
      currentMin: 1,
      currentSec: 0,
      isPlaying: false,
      isStop: false,
      playButtonText: 'Start',
    };
  }

  componentDidMount() {
    console.log(`MTFK componentDidMount`)
    this._startTimer();
  }

  componentWillUnmount() {
    console.log(`MTFK componentWillUnmount`)
    clearInterval(this.interval);
  }

  _startTimer = () => {
    console.log(`MTFK _startTimer`)
    this.interval = setInterval(() => {
      this._updateTimer();
    }, 1000);
  }

  _stopTimer = () => {
    clearInterval(this.interval);
    console.log(`MTFK _stopTimer`)
  }

  _updateTimer = () => {
    const {
      currentMin,
      currentSec,
      initMin,
      initSec,
      isPlaying,
      isStop } = this.state;

    console.log(`MTFK _updateTimer`)
    if (currentSec === 0) {
      if (isPlaying && currentMin > 0) {
        this.setState(state => ({ ...state, currentMin: currentMin - 1, currentSec: 59 }));
      } else {
        /* Stop/Pause */
        if (isStop === true) {
          this.setState(state => ({ ...state, isPlaying: false }));
        } else {
          this.setState(state => ({ ...state, isPlaying: false, currentMin: initMin, currentSec: initSec }));
        }
        this._stopTimer();
      }
    } else {
      this.setState(state => ({ ...state, currentSec: currentSec - 1 }));
    }
  }

  _handlePlayButton = () => {
    const { isPlaying } = this.state;

    if (isPlaying) {
      this.setState(state => ({
        ...state,
        isPlaying: false,
        playButtonText: 'Start'
      }), () => this._stopTimer());
    } else {
      this.setState(state => ({
        ...state,
        isPlaying: true,
        playButtonText: 'Pause'
      }), () => this._startTimer());
    }
  }

  _handleStopButton = () => {
    const { initMin, initSec } = this.state;
    console.log(`MTFK _handleStopButton`)
    this.setState(state => ({
      ...state,
      isPlaying: false,
      isStop: true,
      playButtonText: 'Start',
      currentMin: initMin,
      currentSec: initSec
    }), () => this._stopTimer())
  }

  render() {
    const {
      isPlaying,
      isStop,
      currentMin,
      currentSec,
      initMin,
      initSec,
      playButtonText
    } = this.state;
    console.log(` render() currentMin:${currentMin}, currentSec:${currentSec}`)
    return (
      <div className="App">
        <header className="App-header">
          <p className="timerText">
            {currentMin}:{currentSec}
          </p>
          <Fab
            size="large"
            aria-label="Start"
            className="button buttonCircle"
          >
            Start
          </Fab>
          <button
            className="button buttonCircle"
            onClick={() => this._handlePlayButton()}>
            {playButtonText}
          </button>
          <button
            className="button buttonCircle"
            onClick={() => this._handleStopButton()}>
            Stop
          </button>
        </header>
        {/* 
        <body>

        </body> */}
      </div>
    );
  }
}
