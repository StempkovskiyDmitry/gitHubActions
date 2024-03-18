import React, { useCallback, useState } from 'react';
import { StyleSheet, View, FlatList, RefreshControl } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import { Header } from '#ui/Header';

import { Colors } from '#theme/Variables';

import { useAppDispatch, useAppSelector, useTimer } from '#hooks';

import { Action } from '#models/Action';

import { RootRoutes, RootScreenProps } from '#navigators/types';

import { useGetEventsQuery } from '#services/modules';

import { setListAction } from '#store/App';

import { ActionCard } from './components/ActionCard';

export const GitHubActions: React.FC<
  RootScreenProps<RootRoutes.GitHubActions>
> = () => {
  const { navigate } = useNavigation();
  const dispatch = useAppDispatch();
  const { listAction } = useAppSelector(store => store.app);
  const [refreshing, setRefreshing] = useState(false);
  const eventQuery = useGetEventsQuery();
  const { onPause, onReset } = useTimer();

  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    try {
      const response = await eventQuery.refetch().unwrap();
      if (response) {
        dispatch(setListAction(response));
      }
    } catch (error) {
    } finally {
      onReset();
      setRefreshing(false);
    }
  }, []);

  const onPressActionCard = (action: Action) => {
    onPause();
    navigate(RootRoutes.DetailGitHubAction, { action });
  };

  return (
    <View style={styles.wrapper}>
      <Header title="List Action" />
      <FlatList
        contentContainerStyle={styles.list}
        data={listAction}
        keyExtractor={item => `${item.id}`}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
          />
        }
        renderItem={({ item }) => (
          <ActionCard
            action={item}
            onPress={() => onPressActionCard(item)}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: Colors.darkGray,
    flex: 1,
    justifyContent: 'center',
  },
  list: {
    gap: 8,
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
});
