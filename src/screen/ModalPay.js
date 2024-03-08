import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {Fontisto} from "@expo/vector-icons"

const ModalPay = ({navigation}) => {
    //HACER MODAL DE PAGO y AVERIGUAR COMO POENER ORDENES EN EL HEADER DE CART
    return (
        <View>
            <Text>ModalPay</Text>
            <Fontisto name="shopping-bag-1" size={34} onPress={()=>navigation.navigate("Order")} />
        </View>
    )
}

export default ModalPay

const styles = StyleSheet.create({})