import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import styles from './styles';

interface Props {
  description: string;
}

export default function ({description}: Props) {
  const [showFullDescription, setShowFullDescription] = useState(false);

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  const showDescription = showFullDescription
    ? description
    : description.substring(0, 75);

  return (
    <Text style={styles.description}>
      {showDescription}
      {showFullDescription ? ' ' : '... '}
      {description.length > 75 && (
        <Text style={styles.readMore} onPress={toggleDescription}>
          {showFullDescription ? 'Read Less' : 'Read More'}
        </Text>
      )}
    </Text>
  );
}
