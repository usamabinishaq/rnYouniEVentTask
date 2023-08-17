import {StyleSheet} from 'react-native';
import {FontFamily} from '../../constants/Strings';
import {colors} from '../../utils/colors';

export default StyleSheet.create({
  description: {
    fontSize: 14,
    color: 'gray',
    lineHeight: 20,
    fontFamily: FontFamily.REGULAR,
    textAlign: 'left',
  },
  readMore: {
    color: colors.secondary,
  },
});
