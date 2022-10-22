import React, { Component } from "react";

class CountuseState extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  increase() {
    this.setState(
      {
        count: this.state.count + 1,
      },
      () => {
        console.log(this.state.count);
      }
    );
  }

  render() {
    return (
      <div>
        <h1>count - {this.state.count}</h1>
        <button onClick={() => this.increase()}>Increment</button>
      </div>
    );
  }
}

export default CountuseState;
