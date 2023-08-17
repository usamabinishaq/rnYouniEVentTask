import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import styles from './styles';

interface Props {
  text: string;
  background: string;
  disabled: boolean;
  onPress: () => void;
}

export default function ({text, background, disabled, onPress}: Props) {
  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress}
      style={[styles.container, {backgroundColor: background}]}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
}
