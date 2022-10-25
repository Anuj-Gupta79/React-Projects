import React from "react";

const Greet = (props) => {
  // destructuring the props
  const {name, children} = props;

  // destructuring the state 
  // const {state1, state2} = state;
  return (
    <div>
      <h1>Hello {name}!</h1>
      {children}
    </div>
  );
};

export default Greet;
