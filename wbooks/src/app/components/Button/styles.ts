import { StyleSheet } from 'react-native';

import { grey, ligthBlueButton, white } from '../../../constants/colors';

const styles = StyleSheet.create({
  button: {
    height: 45,
    borderRadius: 20,
    marginTop: 10,
    borderWidth: 1.5,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: ligthBlueButton,
    backgroundColor: white
  },
  fillButton: {
    borderColor: ligthBlueButton,
    backgroundColor: ligthBlueButton
  },
  disabledButton: {
    backgroundColor: grey,
    borderColor: grey
  },
  title: {
    fontWeight: 'bold',
    color: ligthBlueButton,
    fontSize: 18
  },
  fillButtonTitle: {
    color: white,
    fontSize: 18
  }
});

export default styles;
