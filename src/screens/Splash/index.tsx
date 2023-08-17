import React, {useEffect} from 'react';
import {ActivityIndicator, SafeAreaView, StatusBar, Text} from 'react-native';
import {useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

import {RootStackParamList} from '../../navigators/AppNavigator';

import {updateEvents} from '../../redux/slices/EventSlice';

import {EventJson} from '../../data/Events';

import {colors} from '../../utils/colors';
import styles from './styles';

type ScreenNavigationProp = NativeStackNavigationProp<RootStackParamList>;
export default function () {
  const dispatch = useDispatch();

  const navigation = useNavigation<ScreenNavigationProp>();

  useEffect(() => {
    const id = setTimeout(() => {
      /**  Just To Simulate Data is loading from API,
       *   updating the Redux store
       **/
      dispatch(updateEvents(EventJson));

      navigation.replace('BottomTabs');
    }, 2000);

    return () => {
      clearTimeout(id);
    };
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={'black'} barStyle={'light-content'} />
      <Text style={styles.title}>{`Loading Event Details ...`}</Text>
      <ActivityIndicator color={colors.white} size={'small'} />
    </SafeAreaView>
  );
}
