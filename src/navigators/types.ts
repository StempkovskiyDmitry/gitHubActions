import { NativeStackScreenProps } from '@react-navigation/native-stack';

export enum RootRoutes {
  GitHubActions = 'GitHubActions',
  DetailGitHubAction = 'DetailGitHubAction',
}

export type RootStackParamList = {
  [RootRoutes.GitHubActions]: undefined;
  [RootRoutes.DetailGitHubAction]: { action: {} };
};

export type RootScreenProps<RouteName extends RootRoutes> =
  NativeStackScreenProps<RootStackParamList, RouteName>;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
