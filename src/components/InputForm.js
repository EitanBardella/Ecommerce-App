import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { colores } from '../helpers/color'

const InputForm = ({label, value, onChangeText,isSecure,error}) => {
    return (
        <View style={ styles.inputContainer}>
            <Text style={ styles.titleInput}> {label} </Text>
            <TextInput value= {value}
            onChangeText={onChangeText} 
            style={ styles.input}
            secureTextEntry={isSecure}
            />
            {error ? <Text style={ styles.error}> {error} </Text> :null }
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
        borderBottomColor:"white",
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
        fontSize:16,
        color:colores.white,
        fontStyle:"italic",
        marginLeft:20
    }
})