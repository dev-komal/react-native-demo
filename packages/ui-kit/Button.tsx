import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export const Button = ({ onPress, title }) => (
  <TouchableOpacity onPress={onPress} style={styles.btn}>
    <Text>{title}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  btn: {
    padding: 10,
    backgroundColor: '#ddd',
    borderRadius: 5,
    margin: 5,
  },
});
