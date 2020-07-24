import { StyleSheet } from 'react-native';

import { dark } from '../../../constants/colors';

const styles = StyleSheet.create({
  image: {
    height: 60,
    width: 40
  },
  card: {
    flexDirection: 'row',
    flex: 1
  },
  infoContainer: {
    flex: 1,
    marginLeft: 20
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  comment: {
    color: dark,
    fontSize: 16
  }
});

export default styles;
