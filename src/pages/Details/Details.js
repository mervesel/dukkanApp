import React from 'react';
import {View, Text, Image,ActivityIndicator} from 'react-native';
import styles from './Details.styles';
import useFetch from '../../hooks/useFetch/useFetch';
import Config from 'react-native-config';

const Details = ({route}) => {
  const {id}=route.params;
  const {list,loading,error}=useFetch(`https://fakestoreapi.com/products/${id}`);
  console.log({list});


  if (loading) {
    return <ActivityIndicator size="large" />;
    // return <Loading />
  }

  if (error) {
    return <Text> {error} </Text>;
    // return <Error />
  }

  return (
    <View style={styles.container}>
      <Image style={styles.img} source={{uri: list.image}} />
      <View style={styles.body_container}>
        <Text style={styles.titleText}> {list.title} </Text>
        <Text style={styles.desc}> {list.description} </Text>
        <Text style={styles.priceText}> {list.price} TL </Text>
      </View>
    </View>
  );
};

export default Details;
