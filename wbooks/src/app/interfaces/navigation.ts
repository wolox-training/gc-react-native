import { NavigationStackProp } from 'react-navigation-stack';

export interface Navigation {
  navigation: NavigationStackProp & { canGoBack: () => boolean };
}
