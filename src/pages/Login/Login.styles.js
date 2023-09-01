import { Dimensions, StyleSheet } from "react-native";
export default StyleSheet.create({
    container: {
        backgroundColor: 'lightblue',
        flex: 1

    },
    logo_container: {
        flex: 1,
        justifyContent: 'center'

    },
    body_container: {
        flex: 1
        
    },
    image: {
        height: Dimensions.get('window').height/3,
        width: Dimensions.get('window').width * 0.9,
        resizeMode: 'contain',
        alignSelf: 'center',
        tintColor: 'white'

    }

})