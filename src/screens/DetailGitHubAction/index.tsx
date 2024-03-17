import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';

import { useAppDispatch, useAppSelector } from '#hooks/redux';

import { useNavigation } from '@react-navigation/native';

import { Header } from '#ui/Header';

import { Colors } from '#theme/Variables';

import { RootRoutes, RootScreenProps } from '#navigators/types';

import { useGetEventsQuery } from '#services/modules';

import { setListAction } from '#store/App';

import { Node } from './components/Node';

export const DetailGitHubAction: React.FC<
  RootScreenProps<RootRoutes.DetailGitHubAction>
> = ({ route }) => {
  const { action } = route.params;
  const { goBack } = useNavigation();
  const eventQuery = useGetEventsQuery();

  const { listAction } = useAppSelector(store => store.app);
  const dispatch = useAppDispatch();

  const onPress = async () => {
    try {
      await eventQuery.refetch().unwrap();
    } catch (error) {
    } finally {
      goBack();
      dispatch(setListAction([...listAction].reverse()));
    }
  };

  return (
    <View style={styles.wrapper}>
      <Header
        title="Detail Action"
        onPress={onPress}
      />
      <ScrollView contentContainerStyle={styles.list}>
        {Object.keys(action).map((key, index, array) => (
          <Node
            key={`${key}`}
            isLastNode={array.length - 1 !== index}
            title={key}
            // @ts-ignore: todo change type value
            value={action[key]}
          />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: { flex: 1 },
  list: {
    backgroundColor: Colors.darkGray,
    gap: 8,
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
});
