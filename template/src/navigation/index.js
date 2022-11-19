import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import ROUTES from '../constants/routes'
import { Splash } from '../screens'

const Stack = createStackNavigator();

const Router = () => {
  return (
    <Stack.Navigator initialRouteName={ROUTES.SPLASH}>
      <Stack.Screen name={ROUTES.SPLASH} component={Splash} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}

export default Router