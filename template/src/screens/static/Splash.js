import React from 'react'
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import { COLOR, FONT } from '../../theme'
import { IconReact } from '../../assets'
import { Gap } from '../../components'

const Splash = () => {
  return (
    <View style={styles.pageWrap}>
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
  pageWrap: {
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