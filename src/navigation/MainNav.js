import {StyleSheet,View, Text} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import TabNavigation from './TabNavigation';

import AuthStack from './AuthStack';


const MainNav = () => {

    const user = useSelector((state)=>state.auth)


    

    return (
        <>
            <NavigationContainer>
                {user.idToken ? <TabNavigation/> : <AuthStack  />}
            </NavigationContainer>
        </>
    )
}

export default MainNav

const styles = StyleSheet.create({})
