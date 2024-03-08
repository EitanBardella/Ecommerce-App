import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {Octicons} from "@expo/vector-icons"
import { colores } from '../helpers/color'

const Config = ({navigation}) => {
    return (
        <View style={styles.main} >
            <Pressable style={styles.container} onPress={()=>navigation.navigate("Profile")}  >
                <Octicons name='person' size={50} />
                <Text style={styles.Text} > Profile Settings </Text>
            </Pressable>
        </View>
    )
}

export default Config

const styles = StyleSheet.create({
    main:{

    },
    container:{
        width:"80%",
        height:75,
        flexDirection: "row",
        margin:"10%",
        borderWidth:2,
        borderColor:colores.black,
        alignItems:"center",
        justifyContent:"space-around"

    },
    Text:{
        fontSize:25
    },
})