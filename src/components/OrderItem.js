import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import { colores } from '../helpers/color'

const OrderItem = ({order}) => {
    return (
        <View style={styles.container} >
            <View style={styles.card} >
                <Text>
                    {new Date(order.shopDate).toLocaleString()}
                </Text>
                <Text>
                    $ {order.total}
                </Text>
            </View>
        </View>
    )
}

export default OrderItem

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"space-between",
        marginBottom:130
    },
    card:{
        backgroundColor:colores.midLightGrey ,
        height:80,
        width: "90%",
        marginHorizontal: "5%",
        marginVertical: 10,
        padding: 10,
        alignItems:"center",
        justifyContent:"space-around",
        borderRadius:15,
    },
})