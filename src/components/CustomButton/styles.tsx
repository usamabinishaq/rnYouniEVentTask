import {StyleSheet} from 'react-native';
import {FontFamily} from '../../constants/Strings';

export default StyleSheet.create({
  container: {
    height: 40,
    borderRadius: 10,
    alignSelf: 'flex-start',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: '5%',
    margin: '2.5%',
  },
  text: {
    color: 'white',
    fontSize: 18,
    lineHeight: 21,
    fontFamily: FontFamily.REGULAR,
  },
});
