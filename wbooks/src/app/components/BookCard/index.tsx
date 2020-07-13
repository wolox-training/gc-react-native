import React from 'react';
import { View, Text, Image } from 'react-native';

import { styles } from './styles';

import bookImage from './assets/img_book1.png';

const BookCard = () => {
  return (
    <View style={styles.card}>
      <Image style={styles.cardImage} source={bookImage} />
      <View style={styles.titleContainer}>
        <Text style={styles.title}>A Little Bird Told Me</Text>
        <Text style={styles.subtitle}>Timonthy Cross</Text>
      </View>
    </View>
  );
};

export default BookCard;
