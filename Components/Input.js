import React from 'react'
import styled from 'styled-components/native'
import { string, func, bool } from 'prop-types'
import { TextInput } from 'react-native'

import { small, large } from '../styles/spacings'
import { white } from '../styles/colors'

const StyledInput = styled(TextInput)`
  color: ${white};
  margin: ${large}px 0px;
  padding-bottom: ${small}px;
  border-bottom-width: 2px;
  border-bottom-color: ${white};
  font-size: 24px;
`

const Input = ({ value, onChange, disabled, onBlur, textContentType, autoFocus, ...rest }) => (
  <StyledInput
    value={value}
    onChangeText={onChange}
    disabled={disabled}
    onBlur={onBlur}
    textContentType={textContentType}
    autoFocus={autoFocus}
    {...rest}
  />
)

Input.propTypes = {
  value: string,
  onChange: func,
  disabled: bool,
  onBlur: func,
  textContentType: string,
  autoFocus: bool,
}

export default Input
