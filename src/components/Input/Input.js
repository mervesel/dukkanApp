import React from 'react';
import {View, TextInput, Image} from 'react-native';
import styles from './Input.styles';
const Input = ({placeholder, onType, value, iconName,isSecure}) => {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder={placeholder}
        onChangeText={onType}
        value={value}
        style={styles.input}
        secureTextEntry={isSecure}
        
      />

      <Image source={iconName} style={{tintColor: 'gray'}} />
    </View>
  );
};

export default Input;
