import React from 'react';
import { View, Text, Image } from 'react-native';

import { CommentsProps } from '../../interfaces/comments';

import styles from './styles';

const Comment = ({ name, img, comment }: CommentsProps) => (
  <View style={styles.card}>
    <Image style={styles.image} source={img} />
    <View style={styles.infoContainer}>
      <Text numberOfLines={1} style={styles.name}>
        {name}
      </Text>
      <Text style={styles.comment}>{comment}</Text>
    </View>
  </View>
);

export default Comment;
