import React from 'react'
import BaseComponent from '../common/BaseComponent'
import { Button, Page } from 'react-weui'
import './UserNotice.css'

class UserNotice extends BaseComponent {
  render() {
    return (
      <Page>
        <Button>Hello World! UserNotice</Button>
      </Page>
    )
  }
}

export default UserNotice
