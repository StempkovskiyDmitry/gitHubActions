import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

import { Colors } from '#theme/Variables';

import { Action } from '#models/Action';

export const ActionCard = (props: Action) => {
  return (
    <TouchableOpacity style={styles.wrapper}>
      <Text style={styles.type}>{props.type}</Text>
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
  type: {
    color: Colors.black,
    fontSize: 16,
  },
});
