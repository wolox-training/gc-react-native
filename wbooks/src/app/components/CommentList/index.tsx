import React, { useState } from 'react';
import { View, FlatList } from 'react-native';

import Comment from '../Comment';
import Button from '../../components/Button';

import styles from './styles';

const CommentList = ({ comments }: any) => {
  const allCommentsAmount = comments.length;
  const [initialAmount, setNumber] = useState(2);
  const viewAll = () => {
    setNumber(allCommentsAmount);
  };

  const renderItem = ({ item }: { item: any }) => (
    <Comment key={item.id} name={item.name} img={item.img} comment={item.comment} />
  );
  const renderSeparator = () => <View style={styles.cardSeparator} />;

  return (
    <View>
      <FlatList
        data={comments}
        renderItem={renderItem}
        ItemSeparatorComponent={renderSeparator}
        initialNumToRender={initialAmount}
        windowSize={1}
      />
      {initialAmount === 2 && (
        <Button
          text={'View all'}
          onPress={viewAll}
          style={styles.viewAllButton}
          textStyle={styles.viewAllText}
        />
      )}
    </View>
  );
};

export default CommentList;
