
import { Pressable, StyleSheet, Text, View,FlatList } from 'react-native'
import React from 'react'
import cart from "../helpers/data/cart.json"

import CartItem from "../components/CartItem"
import { colores } from '../helpers/color'

const Cart = () => {
    return (
        <View style={styles.container} >
            <FlatList
            data={cart.items}
            keyExtractor={(item)=>item.id}
            renderItem={({item})=><CartItem item={item} />}
            />
            <View style={styles.confirmCont} >
                <Text style={styles.total} >Total:$ {cart.total} </Text>
                <Pressable style={styles.confirmBtn} >
                    <Text style={styles.confirmTxt} >Confirm</Text>
                </Pressable>
            </View>
        </View>
    )
}

export default Cart

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"space-between",
        marginBottom:130
    },
    confirmCont:{
        alignItems:"center",
        gap:10,
        paddigng:25,
        height:80,
        width:"100%",

    },
    confirmBtn:{
        width:150,
        backgroundColor:colores.midLightGrey,
        alignItems:"center",
        justifyContent:"center",
        borderRadius:100,
        padding:10
    },
    confirmTxt:{
        color:colores.white,
        fontSize:20,

    },
    total:{
        fontSize:25
    }
})