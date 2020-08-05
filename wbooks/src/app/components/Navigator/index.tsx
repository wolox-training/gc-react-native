import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import BooksList from '../../screens/BooksList';
import BookDetail from '../../screens/BookDetail';
import Routes from '../../../constants/routes';
import Titles from '../../../constants/titles';
import Header from '../Header';
import TabBarIcons from '../TabBar';
import { tabNavigatorConfig } from '../../../config/navigation';

const BookListScreen = () => {
  const Stack = createStackNavigator();
  return (
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
};

const AppNavigation = () => {
  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
      <Tab.Navigator tabBarOptions={tabNavigatorConfig} screenOptions={TabBarIcons}>
        <Tab.Screen name={Routes.BookList} component={BookListScreen} />
        <Tab.Screen name={Routes.Wish} component={BookListScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
