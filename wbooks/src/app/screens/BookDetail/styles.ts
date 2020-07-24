import { StyleSheet } from 'react-native';

import { lightBlue, white, dark, available, notAvailable } from '../../../constants/colors';

const styles = StyleSheet.create({
  background: {
    backgroundColor: lightBlue,
    padding: 15,
    flex: 1
  },
  container: {
    backgroundColor: white,
    borderRadius: 5,
    height: 280,
    paddingHorizontal: 30,
    paddingVertical: 15,
    width: '100%',
    marginBottom: 15
  },
  image: {
    height: 120,
    width: 80
  },
  card: {
    flexDirection: 'row',
    marginBottom: 15
  },
  infoContainer: {
    marginLeft: 20
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
