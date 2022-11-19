import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Button, Gap } from '../../components'
import { COLOR, FONT } from '../../theme'

const Splash = () => {
  return (
    <View style={styles.pageWrap}>
      <Text style={styles.exampleText}>Splash text</Text>
      <Gap height={20} />
      <Button type='secondary' title="Hallo" />
    </View>
  )
}

export default Splash

const styles = StyleSheet.create({
  pageWrap: {
    padding: 20,
  },
  exampleText: {
    fontFamily: FONT.NORMAL,
    color: COLOR.TYPE.DANGER
  }
})