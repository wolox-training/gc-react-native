import React from 'react';
import { View, FlatList } from 'react-native';

import BookCard from '../BookCard';
import { BOOKS_DATA } from '../../../constants/mocks';
import { Book } from '../../interfaces/books';
import styles from './styles';
import Routes from '../../../constants/routes';

const BooksList = ({ navigation }: any) => {
  const handleClick = () => navigation.navigate(Routes.BookDetail);
  const renderItem = ({ item }: { item: Book }) => (
    <BookCard key={item.id} book={item} onClick={handleClick} />
  );
  const renderSeparator = () => <View style={styles.bookCardSeparator} />;
  return (
    <View style={styles.container}>
      <FlatList data={BOOKS_DATA} renderItem={renderItem} ItemSeparatorComponent={renderSeparator} />
    </View>
  );
};

export default BooksList;
