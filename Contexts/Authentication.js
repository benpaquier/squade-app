import React, { createContext, useState } from 'react'
import { node } from 'prop-types'

const AuthenticationContext = createContext()

const AuthenticationProvider = ({ children }) => {
  const [step, setStep] = useState('welcome')
  const [email, setEmail] = useState('')

  const value = {
    step,
    setStep,
    email,
    setEmail,
  }

  return <AuthenticationContext.Provider value={value}>{children}</AuthenticationContext.Provider>
}

AuthenticationProvider.propTypes = {
  children: node,
}

export { AuthenticationProvider }
export default AuthenticationContext
