import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import React from 'react'
import { colores } from "../helpers/color"; 
import {Entypo} from "@expo/vector-icons";
// import img from "../../assets/clubComicLogo1.png"

import MenuButton from './MenuButton'

const Header = ({title,navigation}) => {
    return (
        <>
            <View style={styles.container} >
                {navigation.canGoBack() && 
                <Pressable style={styles.goBack} onPress={()=>{
                    navigation.goBack()}}>
                        <Entypo name="arrow-with-circle-left" size={35} color="black" />
                </Pressable>
                }
                {/* <Image source={img} style={styles.log} /> */}
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
    },
    goBack:{
        marginRight:20
    },
    // logo: {
    //     width: 50,
    //     height: 50,
    //     marginRight: 10,
    // }
})