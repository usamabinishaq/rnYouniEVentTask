import {SafeAreaView, Text, View} from 'react-native';
import React from 'react';
import styles from './styles';

export default function () {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>{`Groups`}</Text>
    </SafeAreaView>
  );
}
