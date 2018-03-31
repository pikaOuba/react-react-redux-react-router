import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './index.css'
import store from './stores'
import App from './components/index/App'
import UserSetting from './components/user/UserSetting'
import UserNotice from './components/user/UserNotice'
ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Switch>
                <Route exact path="/" component={App}/>
                <Route path="/user/setting" component={UserSetting}/>
                <Route path="/user/notice" component={UserNotice}/>
            </Switch>
        </Router>
    </Provider>,
    document.getElementById('root')
)