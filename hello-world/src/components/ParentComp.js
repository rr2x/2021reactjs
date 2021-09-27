import React, { Component } from 'react'
// import PureComp from './PureComponent'
// import RegComp from './RegComp'
import MemoComponent from './MemoComponent'


class ParentComp extends Component {

  constructor(props) {
    super(props)

    this.state = {
       name: 'hey'
    }
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({name: 'hey'})
    }, 2000)
  }

  render() {
    console.log('*** parent component render ***')
    return (
      <div>
        Parent Component
        {/* <RegComp name={this.state.name}></RegComp>
        <PureComp name={this.state.name}></PureComp> */}

        <MemoComponent name={this.state.name}/>

      </div>
    )
  }
}

export default ParentComp
