import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Shadow from '../helpers/Shadow'

const CardCategory = ({item, navigation}) => {
    return (
        <Pressable onPress={()=>navigation.navigate("ProdCategory", {categorySelect:item})}>
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