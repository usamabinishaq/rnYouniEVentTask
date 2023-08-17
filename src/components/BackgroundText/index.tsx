import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import styles from './styles';

interface Props {
  text: string;
  background: string;
}

export default function ({text, background}: Props) {
  return (
    <View style={[styles.container, {backgroundColor: background}]}>
      <Text style={styles.statusText}>{text}</Text>
    </View>
  );
}
