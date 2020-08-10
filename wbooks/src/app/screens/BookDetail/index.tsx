import React from 'react';
import { ScrollView, View, Text, Image } from 'react-native';

import Button from '../../components/Button';
import CommentList from '../../components/CommentList';
import defaultImage from '../../components/BookCard/assets/img_book1.png';
import { Route } from '../../interfaces/route';
import { Book } from '../../interfaces/books';

import styles from './styles';

const BookDetail = ({ route }: Route) => {
  const { title, author, year, genre, available, comments }: Book = route.params;
  return (
    <ScrollView style={styles.background}>
      <View style={styles.container}>
        <View style={styles.card}>
          <Image style={styles.image} source={defaultImage} />
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
      <View style={styles.container}>
        <CommentList comments={comments} />
      </View>
    </ScrollView>
  );
};

export default BookDetail;
