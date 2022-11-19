import React, { useEffect } from 'react'
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import ROUTES from '../../constants/routes'
import { COLOR, FONT } from '../../theme'
import { IconReact } from '../../assets'
import { navigate } from '../../utils'
import { Gap } from '../../components'

const Splash = () => {

  useEffect(() => {
    const timeout = setTimeout(() => {
      navigate(ROUTES.HOME);
    }, 3000);
    return () => clearTimeout(timeout);
  }, []) 

  return (
    <View style={styles.page}>
      <IconReact width={200} height={200} />
      <Gap height={30} />
      <Text style={styles.title}>React Native Easy Setup</Text>
      <Gap height={20} />
      <ActivityIndicator size='small' color={COLOR.BLACK} />
    </View>
  )
}

export default Splash

const styles = StyleSheet.create({
  page: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontFamily: FONT[700],
    fontSize: 20
  }
})