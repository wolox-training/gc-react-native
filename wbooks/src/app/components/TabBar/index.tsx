import React from 'react';
import { Image } from 'react-native';

import { Route } from '../../interfaces/route';

import { ACTIVE_ICON, INACTIVE_ICON, tabsItems } from './constants';

interface Props {
  focused: boolean;
  size: number;
}

const TabBarIcon = ({ route }: Route) => ({
  tabBarIcon: ({ focused, size }: Props) => {
    const icon = tabsItems[route.name][focused ? ACTIVE_ICON : INACTIVE_ICON];
    return <Image source={icon} style={{ height: size, width: size }} />;
  }
});

export default TabBarIcon;
