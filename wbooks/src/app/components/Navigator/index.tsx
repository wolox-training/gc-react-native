import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import BooksList from '../../screens/BooksList';
import BookDetail from '../../screens/BookDetail';
import Login from '../../screens/Login';
import Routes from '../../../constants/routes';
import Titles from '../../../constants/titles';
import Header from '../Header';
import TabBarIcons from '../TabBar';
import { tabNavigatorConfig } from '../../../config/navigation';

const Stack = createStackNavigator();

const BookListScreen = () => (
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
);

const HomeNavigation = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator tabBarOptions={tabNavigatorConfig} screenOptions={TabBarIcons}>
      <Tab.Screen name={Routes.BookList} component={BookListScreen} />
      <Tab.Screen name={Routes.Wish} component={BookListScreen} />
    </Tab.Navigator>
  );
};

const AppNavigation = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name={Routes.Login} component={Login} options={{ headerShown: false }} />
      <Stack.Screen name={Routes.BookList} component={HomeNavigation} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default AppNavigation;
