import { StyleSheet } from 'react-native';

export const createStyle = () =>
StyleSheet.create({
  modalCont: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  main: {
    width: '100%',
    height: '100%'
  },
  imgModal: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain'
  },
  animatedImgCont: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  }
});