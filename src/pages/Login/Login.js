import React from 'react';
import {SafeAreaView, View, Image,Alert} from 'react-native';
import styles from './Login.styles';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import { Formik } from 'formik';
import usePost from '../../hooks/usePost/usePost';
import {useDispatch} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = ({navigation}) => {

  const dispatch=useDispatch();

  const {data,post,loading,error}=usePost();

  const handleLogin=(values)=>{
    post('https://fakestoreapi.com/auth/login',values);
  }

  if(error){
    Alert.alert('ShopColicxxx','Bir hata oluştu.');

  }
  if(data){
    if(data.status==='Error'){
      Alert.alert('Shopcolic','Kullanıcı bulunamadı.');
    }
    else{
      dispatch({type: 'SET_USER',payload: {user}});
      navigation.navigate('ProductsPage');
      
    }

    console.log(data);
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logo_container}>
        <Image style={styles.image} source={require('../../assets/shopping.png')} />
      </View>
      <Formik
      initialValues={{username: '', password: ''}}
      onSubmit={handleLogin}>
        {({handleSubmit,handleChange,values})=>(
             <View style={styles.body_container}>
             <Input placeholder="Kullanıcı Adını giriniz." value={values.username} onType={handleChange('username')} iconName={require('../../assets/user.png')} />
             <Input placeholder="Şifreyi giriniz." value={values.password} onType={handleChange('password')}  iconName={require('../../assets/password.png')} isSecure />
             <Button title="Giriş Yap" onPress={handleSubmit} loading={loading} />
           </View>
        )}
      </Formik>
    </SafeAreaView>
  );
};

export default Login;


const user={
  "address": {
"geolocation": {
"lat": "-37.3159",
"long": "81.1496"
},
"city": "kilcoole",
"street": "new road",
"number": 7682,
"zipcode": "12926-3874"
},
"id": 1,
"email": "john@gmail.com",
"username": "johnd",
"password": "m38rmF$",
"name": {
"firstname": "john",
"lastname": "doe"
},
"phone": "1-570-236-7033",
"__v": 0

}