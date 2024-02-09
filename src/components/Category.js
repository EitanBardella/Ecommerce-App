import { StyleSheet, Text, View, FlatList, ScrollView } from 'react-native'
import React from 'react'
import category from "../helpers/data/category.json"
import prods from "../helpers/data/product.json"
import CardCategory from './CardCategory'
import ProdxCategory from './ProductCategory'
import ProdHome from './ProdHome'
const Category = ({categorySelectHandler}) => {
    return (
        <ScrollView>
            <FlatList style={styles.container}
                data={category}
                keyExtractor={item => item}
                renderItem={({item})=>(
                    <CardCategory item={item} categorySelectHandler={categorySelectHandler} />
            )}
            />
        </ScrollView>
    )
}

export default Category

const styles = StyleSheet.create({
    container:{
        
    }
})