import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { Colors } from '#theme/Variables';

import { Action } from '#models/Action';

interface IActionCard {
  action: Action;
  onPress: () => void;
}

export const ActionCard = ({ action, onPress }: IActionCard) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={styles.wrapper}
      onPress={onPress}>
      <View style={styles.wrapperInfo}>
        <Text style={[styles.actionId, styles.type]}>id: {action.id}</Text>
        <Text style={styles.type}>{action.type}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: Colors.darkPlate,
    borderRadius: 8,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 10,
  },
  wrapperInfo: {
    alignItems: 'center',
  },
  actionId: {
    fontWeight: 'bold',
  },
  type: {
    color: Colors.black,
    fontSize: 16,
  },
});
