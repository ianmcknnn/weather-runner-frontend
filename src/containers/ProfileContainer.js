import React from 'react'

class ProfileContainer extends React.Component {
  render() {
    const {user} = this.props
    return (
      <div>
        {user ? user.name : null}
      </div>
    )
  }
}

export default ProfileContainer