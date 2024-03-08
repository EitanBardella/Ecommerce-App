import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
//data
import { useGetAllProdQuery } from '../app/servicies/shop'

import ProdHome from "../components/ProdHome"
import { colores } from '../helpers/color'


const Home = ({ navigation}) => {
    const {data:products} = useGetAllProdQuery()
    return (
        <View style={styles.container} >
            {/* <Headerr title={"Home"} navigation={navigation} /> */}
            <ScrollView>
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
        
    }
})