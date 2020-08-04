import React, { useState } from 'react';
import { View } from 'react-native';

import Comment from '../Comment';
import Button from '../Button';
import { CommentsData, CommentsProps } from '../../interfaces/comments';

import styles from './styles';
import { defaultCommentsToView } from './constants';

const CommentList = ({ comments }: CommentsData) => {
  const allCommentsAmount = comments.length;
  const [commentsToView, setCommentsToView] = useState(defaultCommentsToView);
  const viewAll = () => {
    setCommentsToView(allCommentsAmount);
  };

  const renderItem = ({ id, name, img, comment }: CommentsProps) => (
    <View key={id}>
      <Comment key={id} name={name} img={img} comment={comment} />
      <View style={styles.cardSeparator} />
    </View>
  );

  return (
    <View>
      {comments.slice(0, commentsToView).map(renderItem)}
      {commentsToView === defaultCommentsToView && (
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
