import React from 'react';
import {
  StyleSheet,
  View,
  FlatList,
  // RefreshControl,
  Text,
  TouchableOpacity,
} from 'react-native';

import { Colors } from '#theme/Variables';

import { useTimer } from '#hooks';

import { RootRoutes, RootScreenProps } from '#navigators/types';

import { useGetEventsQuery } from '#services/modules';

import { ActionCard } from './components/ActionCard';
// import { POOLING_INTERVAL } from './config';

export const GitHubActions: React.FC<
  RootScreenProps<RootRoutes.GitHubActions>
> = () => {
  const eventQuery = useGetEventsQuery(undefined);
  const { timer, onStart, onPause, onReset } = useTimer();

  return (
    <View style={styles.wrapper}>
      <View style={styles.wrapperTimer}>
        <Text style={styles.timer}>{timer}</Text>
        <View style={styles.wrapperBtns}>
          <TouchableOpacity
            style={styles.btn}
            onPress={onStart}>
            <Text style={styles.btnText}>Start</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btn}
            onPress={onPause}>
            <Text style={styles.btnText}>Pause</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btn}
            onPress={onReset}>
            <Text style={styles.btnText}>Reset</Text>
          </TouchableOpacity>
        </View>
      </View>

      <FlatList
        contentContainerStyle={styles.list}
        data={eventQuery.data}
        keyExtractor={item => `${item.id}`}
        renderItem={({ item }) => <ActionCard {...item} />}
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
  wrapperTimer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  timer: {
    fontSize: 20,
  },
  wrapperBtns: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 8,
    justifyContent: 'center',
    marginTop: 20,
  },
  btn: {
    backgroundColor: Colors.mainBlue,
    borderRadius: 8,
    padding: 10,
  },
  btnText: {
    color: Colors.white,
  },
});
