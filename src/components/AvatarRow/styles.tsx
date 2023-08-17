import {StyleSheet} from 'react-native';
import {colors} from '../../utils/colors';
import {FontFamily} from '../../constants/Strings';

export default StyleSheet.create({
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: '2.5%',
  },
  middleAvatar: {
    marginLeft: -10,
  },
  remainingCount: {
    color: 'white',
    fontSize: 12,
    fontFamily: FontFamily.REGULAR,
  },
  background: {
    width: 35,
    height: 35,
    borderRadius: 25,
    opacity: 0.3,
  },
  lastAvatar: {
    width: 35,
    height: 35,
    borderRadius: 25,
    borderWidth: 2,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.secondary,
    marginLeft: -10,
  },
});
