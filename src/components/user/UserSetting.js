import React, { Component } from 'react'
import './UserSetting.css'
import {getDefault} from '../../stores/user'
import {PropTypes} from 'prop-types'
import {connect} from 'react-redux'
class UserSettings extends Component {

    static propTypes = {
        dispatch: PropTypes.func,
        data: PropTypes.object
    }

    static contextTypes = {
        router: PropTypes.object
    }  
    async componentWillMount () {
        this.props.dispatch(getDefault())
    }
    render() {
        console.log('看看主数据', this.props)
        return (
        <div>Hello World! UserSettings</div>
        )
    }
}

UserSettings = connect((state) => {
    return {
        data: state.user.data
    }
})(UserSettings)
export default UserSettings