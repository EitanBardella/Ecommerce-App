import { StyleSheet, Text, View,Image,Pressable } from 'react-native'
import { colores } from "../helpers/color"; 
import {  useDispatch } from 'react-redux';
import { deleteCartItem } from '../features/cart/cartSlice';
import {Feather} from "@expo/vector-icons"

const CartItem = ({item}) => {
    const dispatch = useDispatch()
    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image source={{ uri: item.thumbnail }} style={styles.image} resizeMode= "cover" />
            </View>
            <Text style={styles.text}> {item.title} </Text>
            <Text style={styles.priceText}> $ {item.price} </Text>
            <Text> Cantidad: {item.quantity} </Text>
            <Pressable  style={styles.buttonContainer} onPress={()=>dispatch(deleteCartItem(item.id)) } >
                <Text style={styles.buttonText}>
                    <Feather name="trash-2" size={25} />
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