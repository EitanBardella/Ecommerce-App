import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colores } from "../helpers/color"; 

import MenuButton from './MenuButton'

const Header = ({title,navigation}) => {
    return (
        <>
            
            <View style={styles.container} >
                <MenuButton navigation={navigation} />
                <Text style={styles.text}>{title}</Text>
            </View>
        </>
    )
}

export default Header

const styles = StyleSheet.create({
    container:{
        flexDirection:"row",
        backgroundColor:colores.yellow,
        height:65,
        width:"100%",
        justifyContent:"center", // Centro horizontalmente
        alignItems:"center", // Centro verticalmente
        paddingHorizontal: 20,
        gap:10,
    },
    text:{
        fontSize:30
    }
})