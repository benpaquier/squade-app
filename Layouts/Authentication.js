import React from 'react'
import { node } from 'prop-types'
import { View, Text } from 'react-native'
import styled from 'styled-components/native'

import { blue, white } from '../styles/colors'

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${blue};
  color: ${white};
`

const Authentication = ({ children }) => {
  return (
    <Container>
      {children}
    </Container>
  )
}

Authentication.propTypes = {
  children: node
}

export default Authentication
