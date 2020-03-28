import React from 'react'
import { node } from 'prop-types'
import { View } from 'react-native'
import styled from 'styled-components/native'

import { blue, white } from '../styles/colors'
import Wrapper from '../Components/Wrapper'

const Container = styled(View)`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${blue};
  color: ${white};
`

const Authentication = ({ children }) => {
  return (
    <Container>
      <Wrapper>{children}</Wrapper>
    </Container>
  )
}

Authentication.propTypes = {
  children: node,
}

export default Authentication
