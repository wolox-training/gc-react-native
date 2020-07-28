import { StyleSheet } from 'react-native';

import { white } from '../../../constants/colors';

const styles = StyleSheet.create({
  title: {
    fontSize: 26,
    color: white,
    flex: 1
  },
  centerTitle: {
    textAlign: 'center'
  },
  header: {
    width: '100%',
    height: 110,
    flexDirection: 'row',
    alignItems: 'center'
  },
  buttonContainer: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default styles;
