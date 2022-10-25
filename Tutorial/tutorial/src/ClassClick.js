import React, { Component } from "react";

class ClassClick extends Component {
  clickHandler() {
    console.log("Click Handler has been done.");
  }
  render() {
    return (
      <div>
        <button onClick={this.clickHandler}>Class Click</button>
      </div>
    );
  }
}

export default ClassClick;
