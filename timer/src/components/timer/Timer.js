import React from 'react';

class Timer extends React.Component {

  constructor(props) {
    super(props);
    this.state = { seconds : 0};
    this.s = "s";
  }

  componentDidMount() {
    this.interval = setInterval(
      () => this.counter
    )
  }

  componentWillUnmount() {
    // ...
  }
  
  render () {
    return (
      <div data-testid="timer">
        {this.state.counter}
      </div>
    );
  }
}

export default Timer;

