import { StyleSheet } from 'react-native';

import { grey, darkLightBlue, white } from '../../../constants/colors';

const styles = StyleSheet.create({
  button: {
    height: 45,
    borderRadius: 20,
    marginTop: 10,
    borderWidth: 1.5,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: darkLightBlue,
    backgroundColor: white
  },
  fillButton: {
    borderColor: darkLightBlue,
    backgroundColor: darkLightBlue
  },
  disabledButton: {
    backgroundColor: grey,
    borderColor: grey
  },
  title: {
    fontWeight: 'bold',
    color: darkLightBlue,
    fontSize: 18
  },
  fillButtonTitle: {
    color: white,
    fontSize: 18
  }
});

export default styles;
