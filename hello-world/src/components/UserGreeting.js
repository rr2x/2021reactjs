import React, { Component } from 'react'

class UserGreeting extends Component {

  constructor(props) {
    super(props)

    this.state = {
       isLoggedIn: false
    }
  }

  render() {

    return (this.state.isLoggedIn && <div>welcome world</div>)


    // let message

    // if (this.state.isLoggedIn) {
    //   message = <div>welcome hello</div>
    // } else {
    //   message = <div>welcome another</div>
    // }
    // return (<div>{message}</div>)


    // return (this.state.isLoggedIn ?
    //         <div>welcome hello</div> :
    //         <div>welcome another</div>)

    // if (this.state.isLoggedIn) {
    //   return (
    //     <div>
    //       Welcome Hello
    //     </div>
    //   )
    // } else {
    //   return (
    //     <div>
    //       Welcome Another
    //     </div>
    //   )
    // }

    // return (
    //   <div>
    //     <div>Welcome World</div>
    //     <div>Welcome Guest</div>
    //   </div>
    // )
  }
}

export default UserGreeting
