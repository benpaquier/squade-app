import React, { useContext } from 'react'
import { View } from 'react-native'
import styled from 'styled-components/native'

import { white } from '../../styles/colors'
import AuthenticationContext from '../../Contexts/Authentication'
import Text from '../Text'
import Button from '../Button'

const ButtonContainer = styled(View)`
  flex-direction: row;
  justify-content: space-around;
  padding: 15px 0px;
`

const Welcome = () => {
  const { setStep } = useContext(AuthenticationContext)

  return (
    <View>
      <Text type="title" align="center">
        Is it your first time on Squade ?
      </Text>
      <ButtonContainer>
        <Button
          title="Yes"
          onPress={() => {
            setStep('signup')
          }}
          outline
          color={white}
        />
        <Button
          title="No"
          onPress={() => {
            setStep('login')
          }}
          outline
          color={white}
        />
      </ButtonContainer>
    </View>
  )
}

export default Welcome
