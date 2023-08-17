import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import styles from './styles';

interface Props {
  categoryName: string;
}

export default function ({categoryName}: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{categoryName}</Text>
    </View>
  );
}
