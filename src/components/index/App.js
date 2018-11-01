import React from 'react'
import './App.css'
import BaseComponent from '../common/BaseComponent'
import {PropTypes} from 'prop-types'
class App extends BaseComponent {

  static propTypes = {
    dispath: PropTypes.func,
    data: PropTypes.object
  }

  static contextTypes = {
    router: PropTypes.object
  }

  handleGo (url) {
    this.context.router.history.push(url)
  }

  render() {
    return (
     <div>122</div>
    )
  }
}

export default App
