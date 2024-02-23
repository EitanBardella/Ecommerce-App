import {StyleSheet,View, Text} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import ShopStack from './ShopStack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CartStack from './CartStack';
import OrderStack from "./OrderStack"
import {FontAwesome6} from "@expo/vector-icons"
import {Fontisto} from "@expo/vector-icons"
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
                            tabBarIcon:()=>{
                                return(
                                    <View>
                                        <FontAwesome6 name="shop" size={34} />
                                    </View>
                                ) 
                            }
                        }}
                    />
                    <Tab.Screen name='CartStack' component={CartStack}
                        options={{
                            tabBarIcon:()=>{
                                return(
                                    <View>
                                        <FontAwesome6 name="cart-shopping" size={34} />
                                    </View>
                                ) 
                            }
                        }}
                    />
                    <Tab.Screen name='OrderStack' component={OrderStack}
                        options={{
                            tabBarIcon:()=>{
                                return(
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

const styles = StyleSheet.create({
    tabBar:{
        height:70,
        borderRadius:10,
        position: "absolute",
        marginBottom:0
    },
})
