import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Headerr from "../components/Headerr"

import Category from '../components/Category'



const Home = ({categorySelectHandler}) => {
    return (
        <View>
            <Headerr title={"Home"}/>

            <Category categorySelectHandler={categorySelectHandler} />

        </View>
    )
}

export default Home

const styles = StyleSheet.create({})