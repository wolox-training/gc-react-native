import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import BooksList from '../../screens/BooksList';
import BookDetail from '../../screens/BookDetail';
import Routes from '../../../constants/routes';
import Titles from '../../../constants/titles';
import Header from '../Header';

const AppNavigation = () => {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={Routes.BookList} component={BooksList} />
        <Stack.Screen
          name={Routes.BookDetail}
          component={BookDetail}
          options={({ navigation }) => ({
            header: () => <Header navigation={navigation} title={Titles.BookDetail} />
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
