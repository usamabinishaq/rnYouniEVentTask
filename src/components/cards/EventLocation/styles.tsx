import {StyleSheet} from 'react-native';
import {colors} from '../../../utils/colors';
import {FontFamily} from '../../../constants/Strings';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '95%',
  },
  leftContainer: {
    flex: 0.7,
    paddingHorizontal: '2.5%',
  },
  addressText: {
    fontSize: 14,
    fontFamily: FontFamily.LIGHT,
    color: colors.white,
    lineHeight: 21,
  },
  directionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  icon: {
    width: 14,
    height: 14,
    resizeMode: 'contain',
  },
  getDirectionText: {
    color: colors.secondary,
    marginLeft: 5,
  },
  rightContainer: {
    flex: 0.3,
    height: 94,
    borderRadius: 12,
    overflow: 'hidden',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
