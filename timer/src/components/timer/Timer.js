import React from 'react';

class Timer extends React.Component {

  constructor(props) {
    super(props);
    this.state = { seconds : 0};
  }

  componentDidMount() {
    this.interval = setInterval(
      () => this.counter(), 1000
    )
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  counter(){
    this.setState( state => ({
      seconds : state.seconds + 1
    }))
  }
  
  render () {
    return (
      <div data-testid="timer">
        <h2>{this.state.seconds}</h2>
      </div>
    );
  }
}

export default Timer;

