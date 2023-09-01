import React from 'react';
import {SafeAreaView, Text, FlatList, ActivityIndicator} from 'react-native';
import styles from './Products.styles';
import ProductCard from '../../components/ProductCard/ProductCard';
import useFetch from '../../hooks/useFetch/useFetch';
import {useDispatch} from 'react-redux';
// import Loading from '../../components/Loading/Loading';
// import Error from '../../components/Error/Error';


const Products = ({navigation}) => {
  const dispatch=useDispatch();
  const {list, loading, error} = useFetch('https://fakestoreapi.com/products');

  const handleProductSelect=(id)=>{
    navigation.navigate('DetailsPage',{id});

  }

  const renderProduct = ({item}) => <ProductCard product={item} onSelect={()=>handleProductSelect(item.id)} />

  if (loading) {
    return <ActivityIndicator size="large" />;
    // return <Loading />
  }

  if (error) {
    return <Text> {error} </Text>;
    // return <Error />
  }

  return (
    <SafeAreaView style={styles.container}>
      <FlatList data={list} renderItem={renderProduct} />
    </SafeAreaView>
  );
};

export default Products;
