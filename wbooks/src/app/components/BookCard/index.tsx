import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import { BookProps } from '../../interfaces/books';

import defaultBookImage from './assets/img_book1.png';
import styles from './styles';

const BookCard = ({ book, onClick }: BookProps) => (
  <TouchableOpacity onPress={onClick}>
    <View style={styles.card}>
      <Image style={styles.cardImage} source={defaultBookImage} />
      <View style={styles.titleContainer}>
        <Text numberOfLines={1} style={styles.title}>
          {book.title}
        </Text>
        <Text style={styles.subtitle}>{book.author}</Text>
      </View>
    </View>
  </TouchableOpacity>
);

export default BookCard;
