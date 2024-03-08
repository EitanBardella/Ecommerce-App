import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colores } from '../helpers/color'
import {AntDesign} from "@expo/vector-icons"

const AddButton = ({title,onPress}) => {
    return (
        <Pressable style={styles.main}  onPress={onPress} >
            <AntDesign name='pluscircleo' size={25} color={colores.white} />
            <Text style={styles.txt} > {title} </Text>
        </Pressable>
    )
}

export default AddButton

const styles = StyleSheet.create({
    main:{
        borderWidth:3,
        borderColor:colores.red,
        width:200,
        height:50,
        borderRadius:10,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center",
        gap:5,
        paddingHorizontal:20,
        backgroundColor:colores.black
    },
    txt:{
        fontSize:16,
        color:colores.white
    },
})