import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ImageSourcePropType,
} from 'react-native';
import styles from './styles';

interface Props {
  image: ImageSourcePropType;
  organizer: string;
}

export default function ({image, organizer}: Props) {
  return (
    <View style={styles.card}>
      <Image source={image} style={styles.image} />
      <View style={styles.details}>
        <Text style={styles.organizerText}>{organizer}</Text>
        <TouchableOpacity style={styles.followButton}>
          <Text style={styles.followButtonText}>Follow</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
