/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import { Provider } from 'react-redux';

import AppNavigation from './src/app/components/Navigator';
import store from './src/redux/store';

const App = () => {
  return (
    <>
      <Provider store={store}>
        <AppNavigation />
      </Provider>
    </>
  );
};

export default App;
