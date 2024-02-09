import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {Entypo} from "@expo/vector-icons";

const BackButton = () => {
    return (
        <Pressable>
            <Entypo name={'menu'}/>
        </Pressable>
    )
}

export default BackButton

const styles = StyleSheet.create({})