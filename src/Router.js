import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Products from './pages/Products/Products';
import Details from './pages/Details/Details';
import Login from './pages/Login/Login';
import {useSelector, useDispatch} from 'react-redux';
import {ActivityIndicator, Image, TouchableOpacity} from 'react-native';

const Stack = createNativeStackNavigator();

const Router = () => {
  const userSession = useSelector(selector => selector.user);
  const isAuthLoading = useSelector(selector => selector.isAuthLoading);

  const dispatch = useDispatch();

  return (
    <NavigationContainer>
      {isAuthLoading ? (
        <ActivityIndicator />
      ) : !userSession ? (
        <Stack.Navigator>
          <Stack.Screen
            name="LoginPage"
            component={Login}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      ) : (
        <>
          <Stack.Navigator>
            <Stack.Screen
              name= 'ProductsPage'
              component={Products}
              options={{
                headerTitle: 'Dükkan',
                headerStyle: {backgroundColor: '#90caf9'},
                headerTitleStyle: {color: 'white', fontSize: 24},
                headerRight: () => (
                  <TouchableOpacity  onPress={()=>dispatch({type: 'REMOVE_USER'})}>
                    <Image style={{height: 30,width: 30,tintColor: '#fff'}} source={require('../src/assets/logout.png')} />
                  </TouchableOpacity>
                ),
              }}
            />
            <Stack.Screen
              name= 'DetailsPage'
              component={Details}
              options={{
                headerTitle: 'Detay',
                headerStyle: {backgroundColor: '#90caf9'},
                headerTitleStyle: {color: 'white', fontSize: 24},
                headerTintColor: 'white',
              }}
            />
          </Stack.Navigator>
        </>
      )}
    </NavigationContainer>
  );
};

export default Router;
