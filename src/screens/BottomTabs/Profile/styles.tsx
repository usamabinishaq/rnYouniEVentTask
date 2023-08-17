import {StyleSheet} from 'react-native';
import {FontFamily} from '../../../constants/Strings';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {fontSize: 18, color: 'white', fontFamily: FontFamily.SEMIBOLD},
});
