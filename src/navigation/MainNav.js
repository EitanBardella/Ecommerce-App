import { StyleSheet, View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import TabNavigation from './TabNavigation';
import AuthStack from './AuthStack';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

const MainNav = () => {

    const user = useSelector((state) => state.auth)

    useEffect(() => {
        console.log(user)
    }, [user])


    return (
        <>
            <NavigationContainer>
                {user.idToken ? <TabNavigation /> : <AuthStack />}
            </NavigationContainer>
        </>
    )
}

export default MainNav

const styles = StyleSheet.create({})
