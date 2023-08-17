import {StyleSheet} from 'react-native';
import {FontFamily} from '../../constants/Strings';
import {colors} from '../../utils/colors';

export default StyleSheet.create({
  container: {
    alignSelf: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
    height: 18,
  },
  bullet: {
    width: 5.35,
    height: '100%',
    backgroundColor: colors.secondary,
  },
  text: {
    fontSize: 17,
    fontFamily: FontFamily.LIGHT,
    lineHeight: 20,
    color: colors.white,
    marginLeft: '2.5%',
  },
});
