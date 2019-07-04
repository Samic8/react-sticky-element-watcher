import React, {Component} from 'react'
import {render} from 'react-dom'

import Example from '../../src'

class Demo extends Component {
  render() {
    return <div>
      <h1>react-sticky-element-watcher Demo</h1>
      <Example/>
    </div>
  }
}

render(<Demo/>, document.querySelector('#demo'))
