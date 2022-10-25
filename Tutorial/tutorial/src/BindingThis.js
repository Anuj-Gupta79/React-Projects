import React, { Component } from "react";

class BindingThis extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "Hello !",
    };
  }

  clickHandler() {
    this.setState({
      message: "GoodBye !",
    });
  }

  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button onClick={() => this.clickHandler}>Click</button>
      </div>
    );
  }
}

export default BindingThis;
