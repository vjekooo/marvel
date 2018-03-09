
import React from 'react'
import { auth, googleAuthProvider } from '../database'

const SignIn = () => {
  return (
    <li
      onClick={() => auth.signInWithPopup(googleAuthProvider)}
    >
      Sign In
    </li>
  )
}

export default SignIn
