import {StyleSheet} from 'react-native';
import {FontFamily} from '../../../constants/Strings';
import {HEIGHT_SCREEN, WIDTH_SCREEN} from '../../../utils/dimensions';
import {colors} from '../../../utils/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
  },
  scrollView: {
    flex: 1,
  },
  title: {
    fontSize: 24,
    color: 'white',
    lineHeight: 35,
    fontFamily: FontFamily.MEDIUM,
  },

  eventBanner: {
    width: WIDTH_SCREEN,
    height: HEIGHT_SCREEN * 0.45,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  backgroundStyle: {
    width: WIDTH_SCREEN,
    height: HEIGHT_SCREEN * 0.45,
    justifyContent: 'space-between',
    paddingBottom: '2.5%',
    marginBottom: '2.5%',
  },
  contentView: {
    width: WIDTH_SCREEN,
    marginHorizontal: '2.5%',
  },
  bulletsView: {
    width: '100%',
    marginTop: '5%',
  },
  categoriesView: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginVertical: '2.5%',
    paddingHorizontal: '2.5%',
  },
  bookTicketView: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  seperator: {
    width: 4,
    height: 4,
    borderRadius: 2,
    backgroundColor: colors.white,
    marginHorizontal: '5%',
  },
  dateRow: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    padding: '2.5%',
  },
  dateText: {
    fontSize: 20,
    color: 'white',
    lineHeight: 35,
    fontFamily: FontFamily.MEDIUM,
  },
});
