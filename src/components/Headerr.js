import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Search from './Search'

const Header = ({title}) => {
    return (
        <>
            <View style={styles.container} >
                <Text style={styles.text}>{title}</Text>
            </View>
            <Search/>
        </>
    )
}

export default Header

const styles = StyleSheet.create({
    container:{
        backgroundColor:"#F4D678",
        height:80,
        width:"100%",
        justifyContent:"center",
        alignItems:"center",
        paddingTop:20,

    },
    text:{
        fontSize:30
    }
})