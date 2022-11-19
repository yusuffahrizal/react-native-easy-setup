import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { Linking, StyleSheet } from 'react-native'
import { BasePage } from './containers'
import { navigationRef } from './utils'
import Router from './navigation'

const App = () => {

  const linking = {
    prefixes: [
      'examplebasecode://'
    ],
  };

  /* Config for redirect page from notification */
  const redirectToPage = async (msg) => {
    let { notification: { body, title }, data: { uri } } = msg;
    if (uri) {
      const able = await Linking.canOpenURL(uri);
      if (able) {
        Linking.openURL(uri);
      }
    }
  };

  return (
    <BasePage>
      <NavigationContainer
        linking={linking} 
        ref={navigationRef}>
        <Router />
      </NavigationContainer>
    </BasePage>
  )
}

export default App

const styles = StyleSheet.create({})