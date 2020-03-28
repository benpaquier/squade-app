import React from 'react'
import { View } from 'react-native'
import { node } from 'prop-types'
import styled from 'styled-components/native'

const Container = styled(View)`
  padding: 15px;
`

const Wrapper = ({ children }) => <Container>{children}</Container>

Wrapper.propTypes = {
  children: node,
}

export default Wrapper
