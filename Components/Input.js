import { TextInput } from 'react-native'
import { string, func, bool } from 'prop-types'

const Input = ({ value, onChange, disabled, onBlur, textContentType }) => (
  <TextInput
    value={value}
    onChange={onChange}
    disabled={disabled}
    onBlur={onBlur}
    textContentType={textContentType}
  />
)

Input.propTypes = {
  value: string,
  onChange: func,
  disabled: bool,
  onBlur: func,
  textContentType: string
}

export default Input
