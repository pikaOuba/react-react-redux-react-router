import React, { Component } from 'react'
import {connect} from 'react-redux'
// import 'antd/dist/antd.css'
// import '../index.css'
// import '../assests/css/font.css'

const mapStateToProps = (state) => {
  return {
    me: state.user.me,
  }
}

export default () => {
  return (WrappedComponent) => connect(mapStateToProps) (
    
    class extends Component {

      render () {   
        return (
          <div><WrappedComponent {...this.props} /></div>
        )
      }
    }
  )
}
