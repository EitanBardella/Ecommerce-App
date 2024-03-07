import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import ProdxCategoy from '../components/ProductCategory'
import Search from '../components/Search'
import { colores } from '../helpers/color'

import { useGetProdByCategoryQuery } from '../app/servicies/shop'

const ProdCategory = ({route,navigation}) => {
    const {data:prod}= useGetProdByCategoryQuery(categorySelect)
    const {categorySelect}= route.params
    //Estado de prods filtrados
    const [prodFilter, setProdFilter] = useState([])
    const [keyword, setKeyword] = useState("");

    console.log(prod)

    const keywordHandler = (key) => {
        // Filtrar los productos basado en la palabra clave
        setKeyword(key);
    };

    //Cambia dependiendo de con que se actualice la categoria
    useEffect(() => {
        //map de los prods filtrados
        // if(categorySelect)setProdFilter(prods.filter(prods => prods.category === categorySelect))
        setProdFilter(prod)
        if(keyword)setProdFilter(prod.filter(prods => {
            const prodTitleLower = prods.title.toLowerCase();
            const keywordLower = keyword.toLowerCase();
            console.log(keyword)
            return prodTitleLower.includes(keywordLower)
        }))
    }, [categorySelect,keyword, prod])
    

    return (
        <>
            {/* <Header title={categorySelect || "Productos"}/> */}
            <Search keywordHandler={keywordHandler} />
            <FlatList
            style={styles.container}
            data={prod}
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