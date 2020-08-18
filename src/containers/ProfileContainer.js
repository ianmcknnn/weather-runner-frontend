import React from 'react'
import BioSection from "../components/BioSection"
import GoalsSection from "../components/GoalsSection"
import RunsSection from "../components/RunsSection"

class ProfileContainer extends React.Component {
  render() {
    const {user} = this.props
    return (
      <>
      <BioSection />
      <GoalsSection />
      <RunsSection />
      </>
    )
  }
}

export default ProfileContainer