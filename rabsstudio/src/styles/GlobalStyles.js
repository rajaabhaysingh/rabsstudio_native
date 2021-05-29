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
  shadMd: {
    shadowColor: '#000',
    shadowOffset: {
      height: 4,
      width: 0,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 4,
  },
  // background Colors
  bgPri: {
    backgroundColor: COLORS.primary,
  },
  bgTrans: {
    backgroundColor: 'transparent',
  },
  bgWhite: {
    backgroundColor: COLORS.white,
  },
  bgBody: {
    backgroundColor: COLORS.lightGray1,
  },
  // fontsize
  txtXs: {
    fontSize: 10,
  },
});

export default globalStyles;
