import { Dimensions, StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e0e0e0',

    },
    img: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height/3,
        
    },
    body_container: {
        marginTop: 5,
        padding: 5

    },
    titleText: {
        fontWeight: 'bold',
        fontSize: 22


    },
    desc: {
        fontStyle: 'italic',

    },
    priceText: {
        fontWeight: 'bold',
        fontSize: 18,
        textAlign: 'right',
        fontStyle: 'italic'
        
    }

    
})