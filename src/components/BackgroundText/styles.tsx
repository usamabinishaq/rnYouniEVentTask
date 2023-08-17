import {StyleSheet} from 'react-native';
import {FontFamily} from '../../constants/Strings';

export default StyleSheet.create({
  container: {
    height: 26,
    borderRadius: 6,
    alignSelf: 'flex-start',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: '2.5%',
    margin: '2.5%',
  },
  statusText: {
    color: 'white',
    fontSize: 14,
    fontFamily: FontFamily.REGULAR,
  },
});
