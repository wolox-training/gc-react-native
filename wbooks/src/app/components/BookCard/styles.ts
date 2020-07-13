import { StyleSheet } from 'react-native';

import { white, dark } from '../../../constants/colors';

export const styles = StyleSheet.create({
  card: {
    backgroundColor: white,
    borderRadius: 5,
    flexDirection: 'row',
    height: 90,
    paddingHorizontal: 30,
    paddingVertical: 15,
    width: '100%'
  },
  cardImage: {
    height: 60,
    width: 40
  },
  titleContainer: {
    marginLeft: 20
  },
  title: {
    fontSize: 17,
    fontWeight: 'bold'
  },
  subtitle: {
    color: dark,
    fontSize: 15
  }
});
