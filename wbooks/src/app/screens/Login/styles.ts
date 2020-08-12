import { StyleSheet } from 'react-native';

import { white, dark, transparent, red } from '../../../constants/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  inputContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 150
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  input: {
    height: 40,
    width: '70%',
    borderColor: dark,
    borderRadius: 15,
    backgroundColor: white
  },
  button: {
    width: '70%',
    borderColor: white,
    backgroundColor: transparent
  },
  textStyle: {
    color: white
  },
  error: {
    color: red
  }
});

export default styles;
