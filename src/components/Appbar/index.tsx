import React from 'react';
import {View, StyleSheet, TouchableOpacity, StatusBar} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './styles';

interface AppBarProps {
  onBackPress: () => void;
}

const AppBar: React.FC<AppBarProps> = ({onBackPress}) => {
  return (
    <View>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle={'light-content'}
      />
      <LinearGradient
        colors={['rgba(19, 19, 19, 1)', 'rgba(19, 19, 19, 0)']}
        start={{x: 0, y: 0}}
        end={{x: 0, y: 1}}
        style={styles.container}>
        <TouchableOpacity style={styles.iconContainer} onPress={onBackPress}>
          <Icon name="chevron-back" size={24} color="white" />
        </TouchableOpacity>
        <View style={styles.rightIconsContainer}>
          <Icon
            name="heart-outline"
            size={24}
            color="white"
            style={styles.icon}
          />
          <Icon
            name="share-social-outline"
            size={24}
            color="white"
            style={styles.icon}
          />
        </View>
      </LinearGradient>
    </View>
  );
};

export default React.memo(AppBar);
