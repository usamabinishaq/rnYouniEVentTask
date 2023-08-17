import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import styles from './styles';

interface Props {
  text: string;
}

export default function ({text}: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.bullet} />
      <Text style={styles.text}>{text}</Text>
    </View>
  );
}
