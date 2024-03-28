//Componentes
import { StyleSheet, View } from 'react-native'
//Stacks
import CartStack from './CartStack';
import ConfigStack from './ConfigStack';
import ShopStack from './ShopStack';
//Extras
import { FontAwesome6 } from "@expo/vector-icons"
import { Fontisto } from "@expo/vector-icons"
//Tab
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
    return (
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
            <Tab.Screen name='ConfigStack' component={ConfigStack}
                options={{
                    tabBarIcon: () => {
                        return (
                            <View>
                                <Fontisto name="player-settings" size={34} />
                            </View>
                        )
                    }
                }}
            />
        </Tab.Navigator>
    )
}

export default TabNavigation

const styles = StyleSheet.create({
    tabBar: {
        height: 70,
        elevation:4,
        borderRadius: 10,
        position: "absolute",
        marginBottom: 0
    },
})