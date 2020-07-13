import { StyleSheet } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

export const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.white,
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
    color: Colors.dark,
    fontSize: 15
  }
});
