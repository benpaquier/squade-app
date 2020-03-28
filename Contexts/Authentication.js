import { createContext } from 'react'
import { node } from 'prop-types'

const AuthenticationContext = createContext()

const AuthenticationProvider = ({ children }) => {
  console.log('hello')
  return (
    <AuthenticationContext.Provider>
      {children}
    </AuthenticationContext.Provider>
  )
}

export default AuthenticationContext
