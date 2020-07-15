import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import BooksList from '../Books';
import BookDetail from '../BookDetail';

const Stack = createStackNavigator();

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Library" component={BooksList} />
        <Stack.Screen name="BookDetail" component={BookDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
