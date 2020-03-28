import { createContext } from 'react'
import { node } from 'prop-types'

const AuthenticationContext = createContext()

const AuthenticationProvider = ({ children }) => {
  return (
    <AuthenticationContext.Provider>
      {children}
    </AuthenticationContext.Provider>
  )
}

export default AuthenticationContext
