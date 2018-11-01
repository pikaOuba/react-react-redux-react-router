import React, { Component, useState }  from 'react'
import wrap from '../../utils/wrap'
import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'
import './App.css'
class App extends Component {

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
    // const [ count, setCount ] = useState(0)
    console.log(useState)
    return (
     <div>
       123
       {/* <span>{count}</span>
       <button onClick={()=>setCount(count + 1)}></button> */}
     </div>
    )
  }
}
App = connect((state)=>{
  return  {
    rows: state.common.rows
  }
})(App)
App = wrap()(App)
export default App
