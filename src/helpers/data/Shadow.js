import { StyleSheet, Text, View } from 'react-native'
import React, { Children } from 'react'

const Shadow = ({style, children}) => {

    return (
        <View style={[styles.container, style]} >
            {children}
        </View>
    )
    }

export default Shadow

const styles = StyleSheet.create({
    container:{
        elevation:10,

    }
})