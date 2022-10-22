import React from "react";

class StateClass extends React.Component {
  constructor() {
    super();
    this.state = {
      message: "If you liked the content, hit the subscribe button"
    };
  }

  changeMessage() {
    this.setState({
      message: "Thank you for subscribing"
    });
  };

  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button onClick={() => this.changeMessage()}>Subscribe</button>
      </div>
    );
  }
}

export default StateClass;
