import React from 'react';
import { View, Text, Image } from 'react-native';

import styles from './styles';
import Button from '../baseComponents/Button';
import defaultImage from '../BookCard/assets/img_book1.png';
import { Route } from '../../interfaces/route';
import { Book } from '../../interfaces/books';

const BookDetail = ({ route }: Route) => {
  const { title, author, img, year, genre }: Book = route.params;
  const image = img ? { uri: img } : defaultImage;
  return (
    <View style={styles.background}>
      <View style={styles.container}>
        <View style={styles.card}>
          <Image style={styles.image} source={image} />
          <View style={styles.infoContainer}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.status}>Status</Text>
            <Text style={styles.info}>{author}</Text>
            <Text style={styles.info}>{year}</Text>
            <Text style={styles.info}>{genre}</Text>
          </View>
        </View>
        <Button
          title={{ text: 'ADD TO WISHLIST', style: styles.wishListButtonTitle }}
          style={styles.wishListButton}
        />
        <Button title={{ text: 'RENT', style: styles.rentButtonTitle }} style={styles.rentButton} />
      </View>
    </View>
  );
};

export default BookDetail;
