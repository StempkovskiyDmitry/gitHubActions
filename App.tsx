import React from 'react';
import { Provider } from 'react-redux';

import { NavigationContainer, DefaultTheme } from '@react-navigation/native';

import { SafeAreaProvider } from 'react-native-safe-area-context';

import { RootNavigator } from '#navigators/index';

import { store } from './src/store';

export const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <NavigationContainer
          theme={{
            ...DefaultTheme,
            colors: {
              ...DefaultTheme.colors,
              background: 'transparent',
            },
          }}>
          <RootNavigator />
        </NavigationContainer>
      </SafeAreaProvider>
    </Provider>
  );
};
