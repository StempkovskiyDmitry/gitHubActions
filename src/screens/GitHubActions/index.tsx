import React, { useEffect, useCallback, useState } from 'react';
import { StyleSheet, View, FlatList, RefreshControl } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import { Colors } from '#theme/Variables';

import { useTimer } from '#hooks';

import { Action } from '#models/Action';

import { RootRoutes, RootScreenProps } from '#navigators/types';

import { useGetEventsQuery } from '#services/modules';

import { ActionCard } from './components/ActionCard';

const TIMER_REFETCH_REQUEST = 30;

export const GitHubActions: React.FC<
  RootScreenProps<RootRoutes.GitHubActions>
> = () => {
  const { navigate } = useNavigation();
  const [refreshing, setRefreshing] = useState(false);
  const eventQuery = useGetEventsQuery(undefined);
  const { timer, onStart, onPause, onReset } = useTimer();

  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    await eventQuery.refetch().unwrap();
    onReset();
    setRefreshing(false);
  }, []);

  useEffect(() => {
    onStart();
  }, []);

  useEffect(() => {
    if (timer === TIMER_REFETCH_REQUEST) {
      eventQuery.refetch();
      onReset();
    }
  }, [timer]);

  const onPressActionCard = (action: Action) => {
    onPause();
    navigate(RootRoutes.DetailGitHubAction, { action });
  };

  return (
    <View style={styles.wrapper}>
      <FlatList
        contentContainerStyle={styles.list}
        data={eventQuery.data}
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
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  list: {
    gap: 8,
  },
});
