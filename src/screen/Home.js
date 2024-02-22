import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Headerr from "../components/Headerr"
import prods from "../helpers/data/product.json"
import Category from '../components/Category'
import BackButton from '../components/BackButton'
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
                        <ProdHome item={item}  />
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