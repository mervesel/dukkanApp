import React from "react";

import {Text,TouchableOpacity ,ActivityIndicator} from "react-native";
import styles from './Button.styles';

const Button=({title,onPress,loading})=>{
    return(
        <TouchableOpacity disabled={loading} style={styles.container} onPress={onPress}>
            {loading ? <ActivityIndicator color="white" /> :
            <Text style={styles.text}> {title} </Text>
            }

        </TouchableOpacity>
    )
}

export default Button;