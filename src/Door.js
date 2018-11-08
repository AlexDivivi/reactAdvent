import React, { Component } from 'react'
import './Door.css'

class Door extends Component {
  openMaybe = () => {
    if (this.props.data.num <= new Date().getDate()) {
      this.props.cnt()
    }
  }

  render() {
    const { text, num, isOpen } = this.props.data

    return (
      <section
        onClick={this.openMaybe}
        className={isOpen ? 'Door open' : 'Door'}
      >
        {isOpen ? text : num}
      </section>
    )
  }
}

export default Door
