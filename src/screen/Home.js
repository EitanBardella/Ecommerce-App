import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import prods from "../helpers/data/product.json"
import ProdHome from "../components/ProdHome"
import { colores } from '../helpers/color'


const Home = ({ navigation}) => {
    return (
        <View style={styles.container} >
            {/* <Headerr title={"Home"} navigation={navigation} /> */}
            <ScrollView>
                <FlatList
                    data={prods}
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