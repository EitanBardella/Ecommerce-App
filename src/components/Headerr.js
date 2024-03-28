import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import React from 'react'
import { colores } from "../helpers/color"; 
import {Entypo} from "@expo/vector-icons";
import { useDispatch, useSelector } from 'react-redux';
import { clearUser } from '../features/auth/authSlice';
import { deleteSession } from '../helpers/db';

// import MenuButton from './MenuButton'

const Header = ({title,navigation}) => {


    const dispatch = useDispatch()

    const tokenId = useSelector((state) => state.auth.tokenId)

    const onLogout = ()=>{
        dispatch(clearUser())
        deleteSession()
    }


    return (
        <>
            <View style={styles.container} >
                {navigation.canGoBack() && 
                <Pressable style={styles.goBack} onPress={()=>{
                    navigation.goBack()}}>
                        <Entypo name="arrow-with-circle-left" size={35} color="black" />
                </Pressable>
                }
                {/* Permite mostrar o no el menu Button
                {showMenuButton && <MenuButton navigation={navigation} />} */}
                <Text style={styles.text}>{title}</Text> 
                {tokenId && (
                    <Pressable style={styles.logOut} onPress={onLogout}>
                        <AntDesign name="logout"size={30} color ="black"/>
                    </Pressable>)}
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
    logOut:{
        position:"absolute",
        right:30,
        bottom:40
    },
    // logo: {
    //     width: 50,
    //     height: 50,
    //     marginRight: 10,
    // }
})