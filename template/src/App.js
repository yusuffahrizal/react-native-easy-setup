import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Router from './navigation';
import { BasePage } from './containers';

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