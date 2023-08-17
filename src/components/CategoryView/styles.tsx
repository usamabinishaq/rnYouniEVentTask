import {StyleSheet} from 'react-native';
import {colors} from '../../utils/colors';
import {FontFamily} from '../../constants/Strings';

export default StyleSheet.create({
  container: {
    height: 35,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: colors.darkGray,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: '3.5%',
    marginHorizontal: '1.5%',
  },
  text: {
    color: colors.white,
    fontFamily: FontFamily.REGULAR,
    fontSize: 16,
  },
});
