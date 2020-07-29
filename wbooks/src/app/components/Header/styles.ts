import { StyleSheet } from 'react-native';

import { white } from '../../../constants/colors';

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
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
  }
});

export default styles;
