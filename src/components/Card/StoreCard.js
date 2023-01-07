import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './StoreCard.style';

const StoreCard = ({store}) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri: store.imgURL}} />
      <Text style={styles.title}>{store.title}</Text>
      <View style={styles.bottomView}>
        <Text style={styles.price}>{store.price}</Text>
      </View>
    </View>
  );
};

export default StoreCard;
