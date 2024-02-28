import { StyleSheet, Text, View, FlatList, ScrollView } from 'react-native'
import React from 'react'
import useGetCategoriesQuery  from '../app/servicies/shop'
import CardCategory from './CardCategory'



const Category = ({navigation}) => {
    const {data:category}= useGetCategoriesQuery()
    return (
        <ScrollView>
            <FlatList style={styles.container}
                data={category}
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