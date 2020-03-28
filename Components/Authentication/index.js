import React, { useContext } from 'react'

import AuthenticationContext from '../../Contexts/Authentication'
import AuthenticationLayout from '../../Layouts/Authentication'
import Welcome from './Welcome'
import Signup from './Signup'

export default function App() {
  const { step } = useContext(AuthenticationContext)

  return (
    <AuthenticationLayout>
      {step === 'welcome' && <Welcome />}
      {step === 'signup' && <Signup />}
    </AuthenticationLayout>
  )
}
