

import { StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import TabNavigation from './TabNavigation';
import AuthStack from './AuthStack';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

import { fetchSession } from '../helpers/db';

import { useDispatch } from 'react-redux';
import { setUser } from '../features/auth/authSlice';

const MainNav = () => {

    const dispatch = useDispatch();
    const user = useSelector((state) => state.auth)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const session = await fetchSession();
                console.log("Session data:", session); // Agregar este console.log
                if (session.rows.length) {
                    const user = session.rows._array[0];
                    dispatch(setUser(user));
                }
            } catch (error) {
                console.error("Error fetching session:", error);
            }
        };

        fetchData();
    }, []);



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




// import { StyleSheet } from 'react-native'
// import { NavigationContainer } from '@react-navigation/native';
// import TabNavigation from './TabNavigation';
// import AuthStack from './AuthStack';
// import { useSelector } from 'react-redux';
// import { useEffect } from 'react';

// import { fetchSession } from '../helpers/db';

// import { useDispatch } from 'react-redux';
// import { setUser } from '../features/auth/authSlice';

// const MainNav = () => {

//     const dispatch = useDispatch();

//     useEffect(() => {
//         (async ()=>{
//             const session = await fetchSession()
//             if (session.rows.length){
//                 const user = session.rows._array[0]
//                 dispatch(setUser(user))
//             }

//         })()
//     },[])


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











// //Componentes
// import { StyleSheet, View } from 'react-native'
// //Stacks
// import CartStack from './CartStack';
// import OrderStack from "./OrderStack"
// import ShopStack from './ShopStack';
// import ConfigStack from "./ConfigStack"
// //Extras
// import { FontAwesome6 } from "@expo/vector-icons"
// import { Fontisto } from "@expo/vector-icons"
// //Tab
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { useEffect } from 'react';
// import { fetchSession } from '../helpers/db';

// import { useDispatch } from 'react-redux';
// import { setUser } from '../features/auth/authSlice';

// const Tab = createBottomTabNavigator();



// const MainNav = () => {

//     const dispatch = useDispatch((state) => state.auth )


//     useEffect(() => {
//         (async ()=>{
//             const session = await fetchSession()
//             if (session.rows.lenght){
//                 const user = session.rows._array[0]
//                 dispatch(setUser)
//             }

//         })()
//     },[])



//     return (
//         <>
//             <NavigationContainer>
//                 <Tab.Navigator
//                     initialRouteName='ShopStack'
//                     screenOptions={{
//                         headerShown: false,
//                         tabBarShowLabel: false,
//                         tabBarStyle: styles.tabBar,
//                     }}
//                 >
//                     <Tab.Screen name='ShopStack' component={ShopStack}
//                         options={{
//                             tabBarIcon: () => {
//                                 return (
//                                     <View>
//                                         <FontAwesome6 name="shop" size={34} />
//                                     </View>
//                                 )
//                             }
//                         }}
//                     />
//                     <Tab.Screen name='CartStack' component={CartStack}
//                         options={{
//                             tabBarIcon: () => {
//                                 return (
//                                     <View>
//                                         <FontAwesome6 name="cart-shopping" size={34} />
//                                     </View>
//                                 )
//                             }
//                         }}
//                     />

//                     <Tab.Screen name='ConfigStack' component={ConfigStack}
//                 options={{
//                     tabBarIcon: () => {
//                         return (
//                             <View>
//                                 <Fontisto name="player-settings" size={34} />
//                             </View>
//                         )
//                     }
//                 }}
//             /> 


//                 </Tab.Navigator>
//             </NavigationContainer>
//         </>
//     )
// }

// export default MainNav

// const styles = StyleSheet.create({})



