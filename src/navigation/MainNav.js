
import { NavigationContainer } from '@react-navigation/native';


//Componentes
import {StyleSheet,View} from 'react-native'
//Stacks
import CartStack from './CartStack';
import OrderStack from "./OrderStack"
import ShopStack from './ShopStack';
//Extras
import {FontAwesome6} from "@expo/vector-icons"
import {Fontisto} from "@expo/vector-icons"
//Tab
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const MainNav = () => {




    return (
        <>
            <NavigationContainer>
            <Tab.Navigator
            initialRouteName='ShopStack'
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: styles.tabBar,
            }}
        >
            <Tab.Screen name='ShopStack' component={ShopStack}
                options={{
                    tabBarIcon: () => {
                        return (
                            <View>
                                <FontAwesome6 name="shop" size={34} />
                            </View>
                        )
                    }
                }}
            />
            <Tab.Screen name='CartStack' component={CartStack}
                options={{
                    tabBarIcon: () => {
                        return (
                            <View>
                                <FontAwesome6 name="cart-shopping" size={34} />
                            </View>
                        )
                    }
                }}
            />
            <Tab.Screen name='OrderStack' component={OrderStack}
                options={{
                    tabBarIcon: () => {
                        return (
                            <View>
                                <Fontisto name="shopping-bag-1" size={34} />
                            </View>
                        )
                    }
                }}
            />
        </Tab.Navigator>
            </NavigationContainer>
        </>
    )
}

export default MainNav

const styles = StyleSheet.create({})


// import { StyleSheet } from 'react-native'
// import { NavigationContainer } from '@react-navigation/native';
// import TabNavigation from './TabNavigation';
// import AuthStack from './AuthStack';
// import { useSelector } from 'react-redux';
// import { useEffect } from 'react';

// const MainNav = () => {

//     const user = useSelector((state) => state.auth)

//     useEffect(() => {
//         console.log(user)
//     }, [user])


//     return (
//         <>
//             <NavigationContainer>
//                 {user.idToken ? <TabNavigation /> : <AuthStack />}
//             </NavigationContainer>
//         </>
//     )
// }

// export default MainNav

// const styles = StyleSheet.create({})
