import { StyleSheet, Text, View, FlatList, ScrollView } from 'react-native'
import React from 'react'
import CardCategory from './CardCategory'
import { useGetCategoriesQuery } from '../app/servicies/shop'



const Category = ({navigation}) => {
    const {data:categories} = useGetCategoriesQuery()
    return (
        <ScrollView>
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
        
    }
})