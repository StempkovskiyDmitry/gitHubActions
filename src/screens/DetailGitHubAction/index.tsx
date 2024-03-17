import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';

import { Colors } from '#theme/Variables';

import { RootRoutes, RootScreenProps } from '#navigators/types';

import { Node } from './components/Node';

export const DetailGitHubAction: React.FC<
  RootScreenProps<RootRoutes.DetailGitHubAction>
> = ({ route }) => {
  const { action } = route.params;

  return (
    <ScrollView contentContainerStyle={styles.wrapper}>
      {Object.keys(action).map((keys, index, array) => (
        <Node
          isLastNode={array.length - 1 !== index}
          title={keys}
          // @ts-ignore: todo change type value
          value={action[keys]}
        />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: Colors.darkGray,
    gap: 8,
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
});
