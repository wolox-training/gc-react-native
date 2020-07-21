import React from 'react';
import { View, Text, Image } from 'react-native';

import { Book } from '../../interfaces/books';
import styles from './styles';

const BookCard = ({ title, author, img }: Book) => {
  return (
    <View style={styles.card}>
      <Image style={styles.cardImage} source={{ uri: img }} />
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{author}</Text>
      </View>
    </View>
  );
};

export default BookCard;
