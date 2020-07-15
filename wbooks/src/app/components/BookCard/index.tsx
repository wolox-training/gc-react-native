import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Book } from '../../interfaces/books';
import { styles } from './styles';

const BookCard = ({ title, author, img }: Book) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.navigate('BookDetail')}>
      <View style={styles.card}>
        <Image style={styles.cardImage} source={{ uri: img }} />
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subtitle}>{author}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default BookCard;
