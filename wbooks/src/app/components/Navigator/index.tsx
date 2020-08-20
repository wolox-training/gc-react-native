import React from 'react';
import { useSelector } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import BooksList from '../../screens/BooksList';
import BookDetail from '../../screens/BookDetail';
import Login from '../../screens/Login';
import WishList from '../../screens/WishList';
import Routes from '../../../constants/routes';
import Titles from '../../../constants/titles';
import Header from '../Header';
import TabBarIcons from '../TabBar';
import { tabNavigatorConfig, headerConfig } from '../../../config/navigation';
import { AppState } from '../../interfaces/appState';

const Stack = createStackNavigator();

const BookListScreen = () => (
  <Stack.Navigator>
    <Stack.Screen
      name={Routes.BookList}
      component={BooksList}
      options={({ navigation }) => ({
        header: () => <Header navigation={navigation} title={Titles.BookList} />
      })}
    />
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
      <Tab.Screen name={Routes.Wish} component={WishList} />
    </Tab.Navigator>
  );
};

const AppNavigation = () => {
  const { user } = useSelector((state: AppState) => state.authorization);
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={headerConfig}>
        {user ? (
          <Stack.Screen name={Routes.BookList} component={HomeNavigation} />
        ) : (
          <Stack.Screen name={Routes.Login} component={Login} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
