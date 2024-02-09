import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Shadow from '../helpers/data/Shadow'

const CardCategory = ({item, categorySelectHandler}) => {
    return (
        <Pressable onPress={()=>categorySelectHandler(item)}>
            <Shadow style={styles.container} >
                <Text  style={styles.text}> {item} </Text>
            </Shadow >
        </Pressable>
    )
}

export default CardCategory

const styles = StyleSheet.create({
    container:{
        width:"80%",
        backgroundColor:"red",
        marginHorizontal:"10%",
        marginVertical:20,
        padding:10,
        alignItems:"center",
        borderRadius:10
    },
    text:{
        fontSize:20,
        fontFamily:"'Quicksand-Bold"
    }
})