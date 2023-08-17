import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  avatarContainer: {
    overflow: 'hidden',
    borderWidth: 2,
    borderColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
});
