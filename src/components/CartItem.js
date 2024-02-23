import { StyleSheet, Text, View,Image,Pressable } from 'react-native'
import { colores } from "../helpers/color"; 

const CartItem = ({item}) => {
    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image source={{ uri: item.thumbnail }} style={styles.image} resizeMode= "cover" />
            </View>
            <Text style={styles.text}> {item.title} </Text>
            <Text style={styles.priceText}> $ {item.price} </Text>
            <Text> {item.quantity} </Text>
            <Pressable  style={styles.buttonContainer}  >
                <Text style={styles.buttonText}>
                    Delete
                </Text>
            </Pressable>
        </View>
    )
}

export default CartItem

const styles = StyleSheet.create({
    container:{
        backgroundColor: colores.midLightGrey,
        width: "90",
        marginHorizontal: "5%",
        marginVertical: 10,
        padding: 10,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-around",
        borderRadius:10
    },
    image: {
        width: 70,
        height: 70 
    },

})