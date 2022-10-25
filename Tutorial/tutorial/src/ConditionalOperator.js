import React, { Component } from "react";

class ConditionalOperator extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isValue: true,
    };
  }
  render() {
    // if/else Statement
    if (this.state.isValue) {
      return <div>Yes</div>;
    }
    else return <div>No</div>;

    // Element Variable
    let message;
    if (this.state.isValue) {
      message = <div>Yes</div>;
    } else message = <div>No</div>;
    return message;

    // Ternary Operator
    return this.state.isValue ?  <div>Yes</div> : <div>No</div>

    // Short Circuit operator 
    return this.state.isValue && <div>Yes</div>
  }
}

export default ConditionalOperator;
