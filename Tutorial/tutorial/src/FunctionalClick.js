import React from "react";

function FunctionalClick() {
  function clickHandler() {
    console.log("Functional Click has been done.");
  }
  return (
    <div>
      <button onClick={clickHandler}>Functional Click</button>
    </div>
  );
}

export default FunctionalClick;
