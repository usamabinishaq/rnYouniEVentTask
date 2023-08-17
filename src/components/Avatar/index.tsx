import React from 'react';
import {View, Image, ImageSourcePropType, StyleSheet} from 'react-native';
import styles from './styles';

interface Props {
  size: number;
  borderRadius: number;
  imageSource: ImageSourcePropType;
}

export default function ({size, borderRadius, imageSource}: Props) {
  return (
    <View
      style={[
        styles.avatarContainer,
        {width: size, height: size, borderRadius},
      ]}>
      <Image source={imageSource} style={styles.avatarImage} />
    </View>
  );
}
