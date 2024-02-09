import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Header from '../components/Headerr'
import prods from "../helpers/data/product.json"
import ProdxCategoy from '../components/ProductCategory'

const ProdCategory = ({categorySelect}) => {
    //Estado de prods filtrados
    const [prodFilter, setProdFilter] = useState([])


    //Cambia dependiendo de con que se actualice la categoria
    useEffect(() => {
        //map de los prods filtrados
        setProdFilter(prods.filter(prods => prods.category === categorySelect))
    }, [categorySelect])
    

    return (
        <>
            <Header title={categorySelect || "Productos"}/>
            <FlatList
            style={styles.container}
            data={prodFilter}
            keyExtractor={item => item.id}
            renderItem={({item})=>
                <ProdxCategoy item={item} />
            }
            numColumns={2}
            />
        </>
    )
}

export default ProdCategory

const styles = StyleSheet.create({
    container:{
        backgroundColor:"#2D2D2D",

    }
})