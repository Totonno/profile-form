import React from 'react'
import PropTypes from 'prop-types'
import ProfileShape from '../../src/propTypes/ProfileShape'

const ProfileSummary = ({ profile }) => {
  return (
    <div>
      {Object.keys(profile).map(field => (
        <p key={field}>
          <b>{field}</b> - {profile[field]}
        </p>
      ))}
    </div>
  )
}

ProfileSummary.propTypes = {
  /** Profile to be displayed */
  profile: ProfileShape.isRequired,
}

export default ProfileSummary
