import React from 'react'

import { AuthenticationProvider } from './Contexts/Authentication'
import Authentication from './Components/Authentication'

export default function App() {
  return (
    <AuthenticationProvider>
      <Authentication />
    </AuthenticationProvider>
  )
}
