import { StyleSheet } from 'react-native';

import { lightBlue, white, dark, available, notAvailable, ligthBlueButton } from '../../../constants/colors';

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
    flexDirection: 'row'
  },
  infoContainer: {
    marginLeft: 20,
    flexDirection: 'column'
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  statusAvailable: {
    fontSize: 15,
    marginTop: 5,
    fontWeight: 'bold',
    color: available
  },
  statusNotAvailable: {
    fontSize: 15,
    marginTop: 5,
    fontWeight: 'bold',
    color: notAvailable
  },
  info: {
    color: dark,
    fontSize: 15
  },
  wishListButton: {
    backgroundColor: white,
    flexDirection: 'column',
    color: ligthBlueButton,
    borderColor: ligthBlueButton,
    borderWidth: 2,
    marginTop: 30
  },
  rentButton: {
    backgroundColor: ligthBlueButton,
    flexDirection: 'column',
    color: white,
    borderColor: ligthBlueButton,
    borderWidth: 2,
    marginTop: 10
  },
  wishListButtonTitle: {
    color: ligthBlueButton
  },
  rentButtonTitle: {
    color: white
  }
});

export default styles;
