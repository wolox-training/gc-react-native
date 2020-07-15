import React from 'react';
import { View, FlatList } from 'react-native';

import BookCard from '../BookCard';
import { BOOKS_DATA } from '../../../constants/mocks';
import { Book } from '../../interfaces/books';
import { styles } from '../Books/styles';

const renderItem = ({ item }: { item: Book }) => (
  <BookCard title={item.title} author={item.author} img={item.img} />
);
const renderSeparator = () => <View style={styles.bookCardSeparator} />;

const BooksList = () => {
  return (
    <View style={styles.container}>
      <FlatList data={BOOKS_DATA} renderItem={renderItem} ItemSeparatorComponent={renderSeparator} />
    </View>
  );
};

export default BooksList;
