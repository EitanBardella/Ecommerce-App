import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colores } from '../helpers/color'

const SubmitButton = ({onPress,title}) => {
    return (
        <Pressable style={ styles.Button} onPress={onPress} > 
            <Text style={ styles.txt}>
                {title}
            </Text>
        </Pressable>
    )
}

export default SubmitButton

const styles = StyleSheet.create({
    Button:{
        width:"100%",
        backgroundColor:colores.fuxia,
        padding:10,
        alignItems:"center",
        borderRadius:10
    },
    txt:{
        textAlign:"center",
        color:colores.white,
        fontSize:18
    }
})