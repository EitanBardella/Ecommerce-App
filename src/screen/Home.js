import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
//data
import { useGetAllProdQuery } from '../app/servicies/shop'

import ProdHome from "../components/ProdHome"
import { colores } from '../helpers/color'

import Category from "../components/Category"

const Home = ({ navigation}) => {
    const {data:products} = useGetAllProdQuery()
    return (
        <View style={styles.container} >
            
            {/* <Headerr title={"Home"} navigation={navigation} /> */}
            <ScrollView>

                <Category navigation={navigation} />

                <Text style={styles.text} > ALL PRODUCTS </Text>

                <FlatList
                    data={products}
                    keyExtractor={(item )=> item.id}
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
        
    },
    text:{
        textAlign:"center",
        fontSize:28,
        borderWidth:3,
        width:"80%",
        marginHorizontal:"10%",
        padding:10,
        color:colores.white,
        borderColor:colores.yellow,
        marginTop:12
    }
})