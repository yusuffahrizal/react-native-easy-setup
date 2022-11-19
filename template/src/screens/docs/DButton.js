import React from 'react'
import { ScrollView, StyleSheet } from 'react-native'
import { Navbar } from '../../components'

const DButton = () => {
  return (
    <ScrollView style={styles.page}>
      <Navbar title="Button" withBack />
    </ScrollView>
  )
}

export default DButton

const styles = StyleSheet.create({
  page: {
    flex: 1
  },
})