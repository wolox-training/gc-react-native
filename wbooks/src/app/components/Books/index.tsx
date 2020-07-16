import React from 'react';
import { View, FlatList } from 'react-native';

import BookCard from '../BookCard';
import { BOOKS_DATA } from '../../../constants/mocks';
import { Book } from '../../interfaces/books';
import { styles } from '../Books/styles';

const BooksList = ({ navigation }: any) => {
  const handleClick = () => navigation.navigate('BookDetail');
  const renderItem = ({ item }: { item: Book }) => <BookCard book={item} onClick={handleClick} />;
  const renderSeparator = () => <View style={styles.bookCardSeparator} />;
  return (
    <View style={styles.container}>
      <FlatList data={BOOKS_DATA} renderItem={renderItem} ItemSeparatorComponent={renderSeparator} />
    </View>
  );
};

export default BooksList;
