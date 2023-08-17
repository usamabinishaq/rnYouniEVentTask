import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import DirectionIcon from '../../../assets/icons/direction.png';
import styles from './styles';
import {colors} from '../../../utils/colors';

interface Props {
  address: string;
  latitude: number;
  longitude: number;
  onDirection: () => void;
}

export default function ({address, latitude, longitude, onDirection}: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <Text style={styles.addressText}>{address}</Text>
        <TouchableOpacity
          onPress={onDirection}
          style={styles.directionContainer}>
          <Image source={DirectionIcon} style={styles.icon} />
          <Text style={styles.getDirectionText}>{`Get Direction`}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.rightContainer}>
        <MapView
          style={styles.map}
          rotateEnabled={false}
          zoomEnabled={false}
          scrollEnabled={false}
          pitchEnabled={false}
          initialRegion={{
            latitude,
            longitude,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
          }}>
          <Marker coordinate={{latitude, longitude}} />
        </MapView>
      </View>
    </View>
  );
}
