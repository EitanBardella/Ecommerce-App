import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Search from './Search'
import MenuButton from './MenuButton'

const Header = ({title, categorySelectHandler}) => {
    return (
        <>
            
            <View style={styles.container} >
                <MenuButton categorySelectHandler={categorySelectHandler}/>
                <Text style={styles.text}>{title}</Text>
            </View>
            <Search />
        </>
    )
}

export default Header

const styles = StyleSheet.create({
    container:{
        flexDirection:"row",
        backgroundColor:"#F4D678",
        height:80,
        width:"100%",
        justifyContent:"center", // Centro horizontalmente
        alignItems:"space-around", // Centro verticalmente
        paddingTop:20,
        paddingHorizontal: 20,
        gap:10
    },
    text:{
        fontSize:30
    }
})