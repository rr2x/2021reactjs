import React, { Component } from 'react'

class EventBind extends Component {

  constructor(props) {
    super(props)

    this.state = {
      message: 'Hello'
    }

    // 3rd approach, bind on constructor
    // this.clickHandler = this.clickHandler.bind(this)
  }

  // clickHandler() {
  //   this.setState({message: 'goodbye'})
  //   console.log(this);
  // }

  // 4th, using arrow function
  clickHandler = () => {
    this.setState({
      message: 'goodbye'
    })
  }

  render() {
    return (
      <div>
        <div>{this.state.message}</div>

        {/* 1st, performance issues */}
        {/* <button onClick={this.clickHandler.bind(this)}>Click</button> */}

        {/* 2nd, easiest to pass parameters */}
        {/* <button onClick={() => this.clickHandler()}>Click</button> */}

        <button onClick={this.clickHandler}>Click</button>
      </div>
    )
  }
}

export default EventBind
