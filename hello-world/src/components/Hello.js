import React from 'react'

const Hello = () => {
  // return (
  //   <div>
  //     <h1>hello from Hello.js</h1>
  //   </div>
  // )
  return React.createElement(
    "div",
    {id: 'hello', className: "dummyClass"},
    React.createElement(
      'h1',
      null,
      "hey hello.js"
      )
    )
}

export default Hello