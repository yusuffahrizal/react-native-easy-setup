import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { StyleSheet } from 'react-native'
import { BasePage } from './containers'
import Router from './navigation'

const App = () => {
  return (
    <BasePage>
      <NavigationContainer>
        <Router />
      </NavigationContainer>
    </BasePage>
  )
}

export default App

const styles = StyleSheet.create({})