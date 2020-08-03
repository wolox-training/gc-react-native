import React, { useState } from 'react';
import { View } from 'react-native';

import Comment from '../Comment';
import Button from '../Button';
import { CommentsData, CommentsProps } from '../../interfaces/comments';

import styles from './styles';

const CommentList = ({ comments }: CommentsData) => {
  const allCommentsAmount = comments.length;
  const [commentsToView, setNumber] = useState(2);
  const viewAll = () => {
    setNumber(allCommentsAmount);
  };

  const renderItem = ({ id, name, img, comment }: CommentsProps, index: number) =>
    index < commentsToView ? (
      <View key={id}>
        <Comment key={id} name={name} img={img} comment={comment} />
        <View style={styles.cardSeparator} />
      </View>
    ) : null;

  return (
    <View>
      {comments.map(renderItem)}
      {commentsToView === 2 && (
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
