import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Colors } from '#theme/Variables';

export type NodeType = number | boolean | string | object;

interface INode {
  title: string;
  value: NodeType;
  isLastNode: boolean;
}

export const Node = ({ title, value, isLastNode }: INode) => {
  return (
    <View style={[styles.wrapper, isLastNode && styles.line]}>
      <Text style={styles.title}>{title}</Text>
      {value && typeof value === 'object' ? (
        Object.keys(value).map((key, index, array) => (
          <Node
            key={`${key}`}
            isLastNode={array.length - 1 !== index}
            title={key}
            // @ts-ignore: todo change type value
            value={value[key]}
          />
        ))
      ) : (
        <Text style={styles.value}>{value}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  line: { borderBottomWidth: 1 },
  title: {
    color: Colors.black,
    fontSize: 20,
    fontWeight: 'bold',
  },
  value: {
    color: Colors.black,
    fontSize: 15,
  },
});
