import React from 'react'

// function Greet() {
//   return <h1>Hello, Welcome Back</h1>
// }

const Greet = props => {
  const {name, heroName, children} = props
  return (
    <div>
      <h1>Hello {name} a.k.a. {heroName}</h1>
      {children}
    </div>
  )
}

export default Greet