import React from 'react';
import { View, Text, Image } from 'react-native';

import { styles } from './styles';
import Button from '../baseComponents/Button';
import defaultImage from '../BookCard/assets/img_book1.png';

const BookDetail = () => {
  return (
    <View style={styles.background}>
      <View style={styles.container}>
        <View style={styles.card}>
          <Image style={styles.image} source={defaultImage} />
          <View style={styles.infoContainer}>
            <Text style={styles.title}>Titulo</Text>
            <Text style={styles.status}>Status</Text>
            <Text style={styles.info}>Author</Text>
            <Text style={styles.info}>Age</Text>
            <Text style={styles.info}>Gendre</Text>
          </View>
        </View>
        <Button
          title={{ text: 'ADD TO WISHLIST', style: styles.wishListButtonTitle }}
          style={styles.wishListButton}
          onPress={() => {
            console.log('ADD TO WISHLIST');
          }}
        />
        <Button
          title={{ text: 'RENT', style: styles.rentButtonTitle }}
          style={styles.rentButton}
          onPress={() => {
            console.log('RENT');
          }}
        />
      </View>
    </View>
  );
};

export default BookDetail;
