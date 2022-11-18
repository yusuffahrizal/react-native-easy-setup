import React from 'react';
import { Splash } from '../screens';
import ROUTES from '../constants/routes';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const Router = () => {
  return (
    <Stack.Navigator initialRouteName={ROUTES.SPLASH}>
      <Stack.Screen name={ROUTES.SPLASH} component={Splash} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}

export default Router