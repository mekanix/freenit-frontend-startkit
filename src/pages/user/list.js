import React from 'react'
import { User } from 'freenit'
import Template from 'templates/default/detail'


class UserList extends React.Component {
  render() {
    return (
      <Template secure style={{}}>
        <User.List {...this.props} />
      </Template>
    )
  }
}


export default UserList
