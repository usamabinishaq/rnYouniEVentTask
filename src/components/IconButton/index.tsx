import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ImageSourcePropType,
} from 'react-native';
import styles from './styles';

interface Props {
  icon: ImageSourcePropType;
  onPress: () => void;
}

export default function ({icon, onPress}: Props) {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.container]}>
      <Image source={icon} style={styles.icon} />
    </TouchableOpacity>
  );
}
