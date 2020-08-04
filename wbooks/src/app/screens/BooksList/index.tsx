import React, { useEffect } from 'react';
import { View, FlatList } from 'react-native';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';

import BookCard from '../../components/BookCard';
import { Book, BooksState } from '../../interfaces/books';
import Routes from '../../../constants/routes';
import { actionCreator } from '../../../redux/books/actions';

import styles from './styles';

const BooksList = ({ navigation }: any) => {
  const dispatch = useDispatch();
  const books = useSelector((state: BooksState) => state.books.books, shallowEqual);
  useEffect(() => {
    dispatch(actionCreator.getBooks());
  }, [dispatch]);

  const renderItem = ({ item }: { item: Book }) => {
    const handleClick = () => navigation.navigate(Routes.BookDetail, item);
    return <BookCard key={item.id} book={item} onClick={handleClick} />;
  };
  const renderSeparator = () => <View style={styles.bookCardSeparator} />;
  return (
    <View style={styles.container}>
      <FlatList data={books} renderItem={renderItem} ItemSeparatorComponent={renderSeparator} />
    </View>
  );
};

export default BooksList;
