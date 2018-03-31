import React from 'react'
import './App.css'
import BaseComponent from '../common/BaseComponent'
import { Page,Button } from 'react-weui'
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
     <Page>
       <Button onClick={this.handleGo.bind(this,'/user/setting')}>用户修改</Button>
       <Button onClick={this.handleGo.bind(this,'/user/notice')}>用户信息通知</Button>
     </Page>
    )
  }
}

export default App
