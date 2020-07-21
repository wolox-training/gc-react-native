import React from 'react';
import { View, Text, Image } from 'react-native';

import styles from './styles';
import Button from '../baseComponents/Button';
import defaultImage from '../BookCard/assets/img_book1.png';
import { Route } from '../../interfaces/route';
import { Book } from '../../interfaces/books';

const BookDetail = ({ route }: Route) => {
  const { title, author, img, year, genre, available }: Book = route.params;
  const image = img ? { uri: img } : defaultImage;
  const status = {
    text: available ? 'Available' : 'Not available',
    style: available ? styles.statusAvailable : styles.statusNotAvailable
  };
  return (
    <View style={styles.background}>
      <View style={styles.container}>
        <View style={styles.card}>
          <Image style={styles.image} source={image} />
          <View style={styles.infoContainer}>
            <Text numberOfLines={1} style={styles.title}>{title}</Text>
            <Text style={status.style}>{status.text}</Text>
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
