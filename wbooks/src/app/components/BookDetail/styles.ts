import { StyleSheet } from 'react-native';

import { lightBlue, white, dark, available, notAvailable } from '../../../constants/colors';

const styles = StyleSheet.create({
  background: {
    backgroundColor: lightBlue,
    padding: 15,
    height: '100%'
  },
  container: {
    backgroundColor: white,
    borderRadius: 5,
    flexDirection: 'column',
    height: 280,
    paddingHorizontal: 30,
    paddingVertical: 15,
    width: '100%'
  },
  image: {
    height: 120,
    width: 80
  },
  card: {
    flexDirection: 'row',
    marginBottom: 20
  },
  infoContainer: {
    marginLeft: 20,
    flexDirection: 'column'
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold'
  },
  status: {
    fontSize: 16,
    marginTop: 5,
    fontWeight: 'bold',
    color: notAvailable
  },
  available: {
    color: available
  },
  info: {
    color: dark,
    fontSize: 16
  }
});

export default styles;
