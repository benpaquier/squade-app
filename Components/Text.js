import React from 'react'
import { node, string } from 'prop-types'
import styled, { css } from 'styled-components/native'

import { white } from '../styles/colors'

import { Text } from 'react-native'

const StyledText = styled(Text)`
  color: ${white};

  ${(props) =>
    props.type === 'title' &&
    css`
      font-size: 34px;
      font-weight: bold;
    `}

  ${(props) =>
    props.type === 'button' &&
    css`
      font-size: 22px;
      font-weight: bold;
    `}

  ${(props) =>
    props.align &&
    css`
      text-align: ${props.align};
    `}
`

const TextField = ({ type, align, children }) => {
  return <StyledText type={type}>{children}</StyledText>
}

TextField.propTypes = {
  type: string,
  align: string,
  children: node,
}

export default TextField
