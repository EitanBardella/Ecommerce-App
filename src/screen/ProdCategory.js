import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'

import ProdxCategoy from '../components/ProductCategory'
import Search from '../components/Search'
import { colores } from '../helpers/color'
import { useGetProductsByCategoryQuery } from '../app/servicies/shop'

const ProdCategory = ({route,navigation}) => {
    const {categorySelect}= route.params
    const {data:prods}=useGetProductsByCategoryQuery(categorySelect)
    //Estado de prods filtrados
    const [prodFilter, setProdFilter] = useState([])
    const [keyword, setKeyword] = useState("");

    const keywordHandler = (key) => {
        // Filtrar los productos basado en la palabra clave
        setKeyword(key);
    };

    //Cambia dependiendo de con que se actualice la categoria
    useEffect(() => {
        //map de los prods filtrados
        setProdFilter(prods)
        if(keyword)setProdFilter(prods.filter(prods => {
            const prodTitleLower = prods.title.toLowerCase();
            const keywordLower = keyword.toLowerCase();
            return prodTitleLower.includes(keywordLower)
        }))
    }, [categorySelect,keyword, prods])
    

    return (
        <>
            {/* <Header title={categorySelect || "Productos"}/> */}
            <Search keywordHandler={keywordHandler} />
            <FlatList
            style={styles.container}
            data={prodFilter}
            keyExtractor={item => item.id}
            renderItem={({item})=>
                <ProdxCategoy item={item} navigation={navigation}  />
            }
            numColumns={2}
            />
        </>
    )
}

export default ProdCategory

const styles = StyleSheet.create({
    container:{
        backgroundColor:colores.darkGreyShadow,

    }
})