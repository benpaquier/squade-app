import React, { useContext } from 'react'
import * as yup from 'yup'
import { Formik } from 'formik'

import Text from '../Text'
import Input from '../Input'
import AuthenticationContext from '../../Contexts/Authentication'

export default () => {
  const { email } = useContext(AuthenticationContext)

  return (
    <>
      <Text type="title">All right, let's signup. We need your email address.</Text>
      <Formik
        initialValues={{ email }}
        onSubmit={(values) => console.log(values)}
        validationSchema={yup.object().shape({
          email: yup.string().email().required(),
        })}
      >
        {({ values, handleChange, handleBlur, errors, setFieldTouched, touched, isValid, handleSubmit }) => (
          <>
            <Input
              value={values.email}
              onChange={handleChange('email')}
              onBlur={handleBlur('email')}
              textContentType="emailAddress"
              autoFocus
              autoCompleteType="email"
              keyboardType="email-address"
            />
          </>
        )}
      </Formik>
    </>
  )
}
