import { StyleSheet, Text, View, FlatList, ScrollView, Button } from 'react-native'
import React from 'react'
import CardCategory from './CardCategory'
import { useGetCategoriesQuery } from '../app/servicies/shop'
import { colores } from '../helpers/color'


const Category = ({navigation}) => {
    const {data:categories} = useGetCategoriesQuery()
    return (
        <ScrollView>
            <Text style={styles.txt} > CATEGORIES </Text>
            <FlatList style={styles.container}
                data={categories}
                keyExtractor={item => item}
                renderItem={({item})=>(
                    <CardCategory item={item} navigation={navigation}  />
                    
            )}
            />
        </ScrollView>
    )
}

export default Category

const styles = StyleSheet.create({
    container:{
        borderBottomWidth:4,
        borderBottomColor:colores.white
    },
    txt:{
        textAlign:"center",
        fontSize:28,
        borderWidth:3,
        width:"80%",
        marginHorizontal:"10%",
        padding:10,
        color:colores.white,
        borderColor:colores.yellow,
        marginTop:15
    }
})