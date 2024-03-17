import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { GitHubActions, DetailGitHubAction } from '#screens';

import { RootRoutes, RootStackParamList } from './types';

const Stack = createNativeStackNavigator<RootStackParamList>();

export const RootNavigator = () => {
  return (
    <Stack.Navigator initialRouteName={RootRoutes.GitHubActions}>
      <Stack.Screen
        component={GitHubActions}
        name={RootRoutes.GitHubActions}
        options={{ title: 'List Action' }}
      />
      <Stack.Screen
        component={DetailGitHubAction}
        name={RootRoutes.DetailGitHubAction}
        options={{ title: 'Detail Action' }}
      />
    </Stack.Navigator>
  );
};
