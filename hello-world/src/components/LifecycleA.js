import React, { Component } from 'react'
import LifecycleB from './LifecycleB'

class LifecycleA extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: 'test'
    }

    console.log('LifecycleA constructor');
  }

  static getDerivedStateFromProps(props, state) {
    console.log('LifecycleA getDerivedStateFromProps');
    return null
  }

  componentDidMount() {
    console.log('LifecycleA componentDidMount');
  }

  shouldComponentUpdate() {
    console.log('LifecycleA shouldComponentUpdate');
    return true
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('LifecycleA getSnapshotBeforeUpdate');
    return null
  }

  componentDidUpdate() {
    console.log('LifecycleA componentDidUpdate');
  }

  render() {
    console.log('LifecycleA render');
    return (
      <div>
        <div>Lifecycle A</div>
        <button onClick={() => {
          this.setState({name: 'test2'})
          console.log(`Changed state to: ${this.state.name}`)
          }}>Change state</button>
        <LifecycleB />
      </div>
    )
  }
}

export default LifecycleA
