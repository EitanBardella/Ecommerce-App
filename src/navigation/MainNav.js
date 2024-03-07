import {StyleSheet,View, Text} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import TabNavigation from './TabNavigation';


const MainNav = () => {
    return (
        <>
            <NavigationContainer>
                <TabNavigation/>
            </NavigationContainer>
        </>
    )
}

export default MainNav

const styles = StyleSheet.create({})
