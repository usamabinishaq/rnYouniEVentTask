import {StyleSheet} from 'react-native';
import {colors} from '../../../utils/colors';
import {FontFamily} from '../../../constants/Strings';

export default StyleSheet.create({
  card: {
    flexDirection: 'row',
    borderRadius: 16,
    height: 105,
    width: '90%',
    backgroundColor: colors.dullBlack,
    padding: '2.5%',
    marginVertical: '2.5%',
  },
  image: {
    flex: 0.4,
    height: '100%',
    borderRadius: 16,
    marginRight: 10,
  },
  details: {
    flex: 1,
    justifyContent: 'space-around',
  },
  organizerText: {
    fontSize: 18,
    color: colors.white,
    fontFamily: FontFamily.REGULAR,
    width: '90%',
    lineHeight: 22,
  },
  followButton: {
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-start',
    backgroundColor: colors.secondary,
    borderRadius: 6,
    paddingHorizontal: '10%',
  },
  followButtonText: {
    color: 'white',
    fontFamily: FontFamily.REGULAR,
    lineHeight: 14,
  },
});
