import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

import ProdHome from "../components/ProdHome"
import { colores } from '../helpers/color'
import useGetProductsQuery  from '../app/servicies/shop'


const Home = ({ navigation}) => {
    const {data:products}= useGetProductsQuery()
    return (
        <View style={styles.container} >
            {/* <Headerr title={"Home"} navigation={navigation} /> */}
            <ScrollView>
                <FlatList
                    data={products}
                    keyExtractor={item => item}
                    renderItem={({item})=>(
                        <ProdHome item={item} navigation={navigation}  />
                    )}
                    numColumns={2}
                />
            </ScrollView>

        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    container:{
        backgroundColor:colores.darkGreyShadow,
        
    }
})