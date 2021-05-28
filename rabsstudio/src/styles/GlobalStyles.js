import {StyleSheet} from 'react-native';
import {COLORS} from '../constants';

const globalStyles = StyleSheet.create({
  // margins
  mt2: {
    marginTop: 2,
  },
  // flexbox
  f1: {
    flex: 1,
  },
  f1ac: {
    display: 'flex',
    flex: 1,
    alignItems: 'center',
  },
  fc: {
    display: 'flex',
    alignItems: 'center',
  },
  // shadows
  shadSm: {
    shadowColor: '#000',
    shadowOffset: {
      height: 2,
      width: 0,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 2,
  },
  // background Colors
  bgPri: {
    backgroundColor: COLORS.primary,
  },
  bgTrans: {
    backgroundColor: 'transparent',
  },
});

export default globalStyles;
