import { StyleSheet } from "react-native";
export default StyleSheet.create({
    container: {
        backgroundColor: '#e0e0e0',
        flex: 1,
        margin: 5,
        flexDirection: 'row',
        borderRadius: 5,
    },
    img:{
        width: 100,
        minHeight: 100,
        backgroundColor: '#fff',
        resizeMode: 'contain'
    },
    inner_container: {
        justifyContent: 'space-between',
        flex: 1,
        paddingLeft: 5
    },
    price: {
        color: 'gray',
        fontStyle: 'italic',
        textAlign: 'right',
        fontSize: 15,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold'
    }
    
})