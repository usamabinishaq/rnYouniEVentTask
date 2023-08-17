import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageSourcePropType,
  ImageBackground,
} from 'react-native';
import styles from './styles';
import Avatar from '../Avatar';

interface Props {
  avatarImages: ImageSourcePropType[];
  remainingUsersCount: string;
}

export default function ({avatarImages, remainingUsersCount}: Props) {
  return (
    <View style={styles.rowContainer}>
      <Avatar size={35} borderRadius={25} imageSource={avatarImages[0]} />
      <View style={styles.middleAvatar}>
        <Avatar size={35} borderRadius={25} imageSource={avatarImages[1]} />
      </View>
      <View style={styles.middleAvatar}>
        <Avatar size={35} borderRadius={25} imageSource={avatarImages[2]} />
      </View>
      <ImageBackground
        source={avatarImages[3]}
        style={styles.lastAvatar}
        imageStyle={styles.background}>
        <Text style={styles.remainingCount}>{`+${remainingUsersCount}`}</Text>
      </ImageBackground>
    </View>
  );
}
