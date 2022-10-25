import React from 'react'

function ChildComponent(props) {
  return (
    <div>
        <button onClick = {()=>props.greetHandler("your aulad")}>Greet Parent</button>
    </div>
  )
}

export default ChildComponent

