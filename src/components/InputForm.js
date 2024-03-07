import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { colores } from '../helpers/color'

const InputForm = ({label, value, onChangeText}) => {
    return (
        <View style={ styles.inputContainer}>
            <Text style={ styles.titleInput}> {label} </Text>
            <TextInput value= {value} onChangeText={onChangeText} style={ styles.input} />
        </View>
    )
}

export default InputForm

const styles = StyleSheet.create({
    inputContainer:{
        width:"100%"
    },
    input:{
        width:"90%",
        borderWidth:0,
        borderBottomWidth:3,
        borderBottomColor:colores.white,
        padding:2,
        fontSize:14, 
        marginHorizontal:"5%",
        marginVertical:10
    },
    titleInput:{
        width:"90%",
        fontSize:16, 
        marginHorizontal:"5%",
        color:colores.black
    },
    error:{

    }
})