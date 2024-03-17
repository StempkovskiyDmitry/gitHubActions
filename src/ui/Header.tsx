import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { Colors } from '#theme/Variables';

interface IHeader {
  title: string;
  onPress?: () => void;
}

export const Header = ({ title, onPress }: IHeader) => {
  return (
    <View style={styles.wrapper}>
      {onPress && (
        <TouchableOpacity
          style={styles.button}
          onPress={onPress}>
          <Text>Back</Text>
        </TouchableOpacity>
      )}
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    alignItems: 'center',
    backgroundColor: Colors.white,
    flexDirection: 'row',
    justifyContent: 'center',
    paddingBottom: 16,
    paddingTop: 30,
  },
  button: {
    bottom: 16,
    fontWeight: 'bold',
    justifyContent: 'center',
    left: 20,
    position: 'absolute',
  },
  title: {
    color: Colors.black,
    fontSize: 16,
    fontWeight: 'bold',
  },
});
