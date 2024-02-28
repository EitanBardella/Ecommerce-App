import { FlatList, StyleSheet, Text, View } from 'react-native'
import order from "../helpers/data/order.json"
import React from 'react'
import OrderItem from '../components/OrderItem'

const Order = () => {
    return (
        <>
            <FlatList
            data={order}
            keyExtractor={(item)=>item.id}
            renderItem={({item})=><OrderItem order={item} />}
            />
        </>
    )
}

export default Order

const styles = StyleSheet.create({})