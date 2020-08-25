import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import STORAGE from '../../../constants/storage';
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
import { getAuthorizationData } from '../../../services/AuthorizationService';
import { actionCreators } from '../../../redux/authorization/actions';

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
  const { user: currentUser } = useSelector((state: AppState) => state.authorization);
  const dispatch = useDispatch();
  useEffect(() => {
    getAuthorizationData().then((authorizationData) => {
      const {
        [STORAGE.user]: user,
        [STORAGE.authorizationHeaders]: authorizationHeaders
      } = authorizationData;

      if (user && authorizationHeaders) {
        dispatch(actionCreators.rehydrateAuthorization(user, authorizationHeaders));
      }
    });
  }, [dispatch]);

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={headerConfig}>
        {currentUser ? (
          <Stack.Screen name={Routes.BookList} component={HomeNavigation} />
        ) : (
          <Stack.Screen name={Routes.Login} component={Login} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
