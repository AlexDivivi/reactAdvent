import React, { Component } from 'react'
import Door from './Door'
import Counter from './Counter'
import './App.css'

class App extends Component {
  state = {
    openDoorsCount: 0,
    doors: this.getRandomDoors()
  }

  getRandomDoors() {
    return [
      { text: 'Foo' },
      { text: 'Bar' },
      { text: 'Baz' },
      { text: 'Foobar' },
      { text: 'Lorem' },
      { text: 'ipsum' },
      { text: 'dolor' },
      { text: 'sit' },
      { text: 'hello' },
      { text: 'world' },
      { text: 'Foo' },
      { text: 'Bar' },
      { text: 'Baz' },
      { text: 'Foo' },
      { text: 'Foo' },
      { text: 'Foo' },
      { text: 'Foo' },
      { text: 'Foo' },
      { text: 'Foo' },
      { text: 'Foo' },
      { text: 'Foo' },
      { text: 'Foo' },
      { text: 'Foo' },
      { text: 'Foo' }
    ]
      .map((item, index) => ({
        ...item,
        num: index + 1,
        isOpen: false,
        rand: Math.random()
      }))
      .sort((a, b) => a.rand - b.rand)
  }

  renderDoors() {
    return this.state.doors.map(door => (
      <Door key={door.num} data={door} cnt={() => this.openDoor(door.num)} />
    ))
  }

  openDoor = num => {
    const { doors } = this.state
    const index = doors.findIndex(door => door.num === num)
    const newDoors = [
      ...doors.slice(0, index),
      { ...doors[index], isOpen: true },
      ...doors.slice(index + 1)
    ]
    this.setState({
      doors: newDoors,
      openDoorsCount: this.state.openDoorsCount + 1
    })
  }

  render() {
    return (
      <React.Fragment>
        <Counter num={this.state.openDoorsCount} />
        <section className="bdy">{this.renderDoors()}</section>
      </React.Fragment>
    )
  }
}

export default App
