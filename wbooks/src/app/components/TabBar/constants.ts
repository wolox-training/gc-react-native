import Titles from '../../../constants/titles';
import Routes from '../../../constants/routes';

import libraryInactive from './assets/ic_library.png';
import wishInactive from './assets/ic_wishlist.png';
import wishActive from './assets/ic_wishlist_active.png';
import libraryActive from './assets/ic_library_active.png';

export const ACTIVE_ICON = 'activeIcon';
export const INACTIVE_ICON = 'inactiveIcon';

export const tabsItems = {
  [Routes.BookList]: {
    [ACTIVE_ICON]: libraryActive,
    [INACTIVE_ICON]: libraryInactive,
    title: Titles.BookList
  },
  [Routes.Wish]: { [ACTIVE_ICON]: wishActive, [INACTIVE_ICON]: wishInactive, title: Titles.WishList }
};
