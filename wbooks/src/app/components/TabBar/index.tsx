import React from 'react';
import { Image, Text } from 'react-native';

import Titles from '../../../constants/titles';
import Routes from '../../../constants/routes';
import { Route } from '../../interfaces/route';

import libraryInactive from './assets/ic_library.png';
import wishInactive from './assets/ic_wishlist.png';
import wishActive from './assets/ic_wishlist_active.png';
import libraryActive from './assets/ic_library_active.png';
import styles from './styles';

interface Props {
  focused: boolean;
  size: number;
}

const ACTIVE_ICON = 'activeIcon';
const INACTIVE_ICON = 'inactiveIcon';

const TabBarIcon = ({ route }: Route) => {
  const tabsItems = {
    [Routes.BookList]: {
      [ACTIVE_ICON]: libraryActive,
      [INACTIVE_ICON]: libraryInactive,
      title: Titles.BookList
    },
    [Routes.Wish]: { [ACTIVE_ICON]: wishActive, [INACTIVE_ICON]: wishInactive, title: Titles.WishList }
  };

  return {
    tabBarLabel: ({ focused }: Props) => {
      return <Text style={[focused ? styles.focused : styles.inactive]}>{tabsItems[route.name].title}</Text>;
    },
    tabBarIcon: ({ focused, size }: Props) => {
      const icon = tabsItems[route.name][focused ? ACTIVE_ICON : INACTIVE_ICON];
      return <Image source={icon} style={{ height: size, width: size }} />;
    }
  };
};

export default TabBarIcon;
