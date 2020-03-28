import React from 'react'
import { func, string, bool } from 'prop-types'
import styled, { css } from 'styled-components/native'

import { TouchableHighlight } from 'react-native'
import Text from './Text'

const StyledButton = styled(TouchableHighlight)`
  padding: 20px 30px;

  ${(props) =>
    props.outline &&
    css`
      border: solid 2px white;
      borderradius: 50px;
    `}
`

const Button = ({ onPress, disabled, title, outline, color }) => {
  return (
    <StyledButton onPress={onPress} disabled={disabled} outline={outline}>
      <Text type="button">{title}</Text>
    </StyledButton>
  )
}

Button.propTypes = {
  onPress: func,
  disabled: bool,
  title: string,
  color: string,
  outline: bool,
}

export default Button
