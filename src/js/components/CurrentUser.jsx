
import React from 'react'
import PropTypes from 'prop-types'
import { auth } from '../database'

const CurrentUser = ({ currentUser }) => {
  const firstName = currentUser.displayName.split(' ').slice(0, 1)
  return (
    <li
      onClick={() => auth.signOut()}
    >
      Sign Out <span>{firstName}</span>
    </li>
  )
}

CurrentUser.propTypes = {
  currentUser: PropTypes.object
}

export default CurrentUser
