import React, { Component } from 'react'
import {connect} from 'react-redux'
import 'antd/dist/antd.css'
import Page from '../components/common/Page'
import '../index.css'
import '../assests/css/font.css'
import { setTopAlertTips } from '../stores/common'

const mapStateToProps = (state) => {
  return {
    me: state.user.me,
  }
}

export default () => {
  return (WrappedComponent) => connect(mapStateToProps) (
    
    class extends Component {

      render () {   
        const { me } = this.props
        const { pathname } = this.props.location
        return (
          <div><WrappedComponent {...this.props} /></div>
        )
      }
    }
  )
}
