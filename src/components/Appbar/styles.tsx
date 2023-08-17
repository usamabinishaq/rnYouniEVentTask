import {StyleSheet} from 'react-native';
import {WIDTH_SCREEN} from '../../utils/dimensions';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: '2.5%',
    paddingTop: '5%',
    height: '45%',
    width: WIDTH_SCREEN,
  },
  iconContainer: {
    flex: 1,
    alignItems: 'flex-start',
  },
  rightIconsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginHorizontal: 10,
  },
});
