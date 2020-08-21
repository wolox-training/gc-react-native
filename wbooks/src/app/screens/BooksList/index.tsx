import React, { useEffect } from 'react';
import { View, FlatList } from 'react-native';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';

import BookCard from '../../components/BookCard';
import { Book } from '../../interfaces/books';
import { AppState } from '../../interfaces/appState';
import Routes from '../../../constants/routes';
import { actionCreator } from '../../../redux/books/actions';

import styles from './styles';

const BooksList = ({ navigation }: any) => {
  const dispatch = useDispatch();
  const books = useSelector((state: AppState) => state.books.books.page, shallowEqual);
  useEffect(() => {
    dispatch(actionCreator.getBooks());
  }, [dispatch]);

  const renderItem = ({ item }: { item: Book }) => {
    const handleClick = () => navigation.navigate(Routes.BookDetail, item);
    return <BookCard book={item} onClick={handleClick} />;
  };
  const renderSeparator = () => <View style={styles.bookCardSeparator} />;
  return (
    <View style={styles.container}>
      <FlatList
        data={books}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        ItemSeparatorComponent={renderSeparator}
      />
    </View>
  );
};

export default BooksList;
