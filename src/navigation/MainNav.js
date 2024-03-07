import {StyleSheet,View, Text} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import TabNavigation from './TabNavigation';
import { useState } from 'react';
import AuthStack from './AuthStack';


const MainNav = () => {
    //Estado para logearse
    const [idToken, setIdToken]=useState("")

    return (
        <>
            <NavigationContainer>
                {idToken ? <TabNavigation/> : <AuthStack/>}
            </NavigationContainer>
        </>
    )
}

export default MainNav

const styles = StyleSheet.create({})
