import { AppRegistry, ScrollView, FlatList } from 'react-native';
import { App } from './App';
import { name as appName } from './app.json';

ScrollView.defaultProps = {
  ...(ScrollView.defaultProps || {}),
  showsHorizontalScrollIndicator: false,
  showsVerticalScrollIndicator: false,
};

FlatList.defaultProps = {
  ...(FlatList.defaultProps || {}),
  showsHorizontalScrollIndicator: false,
  showsVerticalScrollIndicator: false,
  initialNumToRender: 10,
};

AppRegistry.registerComponent(appName, () => App);
