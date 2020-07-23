import React from 'react';
import { View, Text, Image } from 'react-native';

import Button from '../../components/Button';
import defaultImage from '../../components/BookCard/assets/img_book1.png';
import { Route } from '../../interfaces/route';
import { Book } from '../../interfaces/books';

import styles from './styles';

const BookDetail = ({ route }: Route) => {
  const { title, author, img, year, genre, available }: Book = route.params;
  const image = img ? { uri: img } : defaultImage;
  return (
    <View style={styles.background}>
      <View style={styles.container}>
        <View style={styles.card}>
          <Image style={styles.image} source={image} />
          <View style={styles.infoContainer}>
            <Text numberOfLines={1} style={styles.title}>
              {title}
            </Text>
            <Text style={[styles.status, available && styles.available]}>
              {available ? 'Available' : 'Not available'}
            </Text>
            <Text style={styles.info}>{author}</Text>
            <Text style={styles.info}>{year}</Text>
            <Text style={styles.info}>{genre}</Text>
          </View>
        </View>
        <Button text={'ADD TO WISHLIST'} />
        <Button text={'RENT'} fill={true} disabled={!available} />
      </View>
    </View>
  );
};

export default BookDetail;
