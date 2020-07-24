import React from 'react';
import { View, FlatList } from 'react-native';

import BookCard from '../../components/BookCard';
import { BOOKS_DATA } from '../../../constants/mocks';
import { Book } from '../../interfaces/books';
import Routes from '../../../constants/routes';

import styles from './styles';

const BooksList = ({ navigation }: any) => {
  const renderItem = ({ item }: { item: Book }) => {
    const handleClick = () => navigation.navigate(Routes.BookDetail, item);
    return <BookCard key={item.id} book={item} onClick={handleClick} />;
  };
  const renderSeparator = () => <View style={styles.bookCardSeparator} />;
  return (
    <View style={styles.container}>
      <FlatList data={BOOKS_DATA} renderItem={renderItem} ItemSeparatorComponent={renderSeparator} />
    </View>
  );
};

export default BooksList;
