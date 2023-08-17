import {StyleSheet} from 'react-native';
import {FontFamily} from '../../constants/Strings';
import {colors} from '../../utils/colors';

export default StyleSheet.create({
  container: {
    height: 40,
    width: 45,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: colors.secondary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
});
