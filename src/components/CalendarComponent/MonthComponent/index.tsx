import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';

interface Props {
  month: string;
  onPrevMonth: () => void;
  onNextMonth: () => void;
}

export default function ({month, onPrevMonth, onNextMonth}: Props) {
  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={onPrevMonth}>
        <Icon name="angle-left" size={24} color="white" />
      </TouchableOpacity>
      <Text style={styles.monthYearText}>{month}</Text>
      <TouchableOpacity onPress={onNextMonth}>
        <Icon name="angle-right" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
}
