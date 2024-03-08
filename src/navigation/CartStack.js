
import Cart from "../screen/Cart";
import Header from "../components/Headerr"
import {createNativeStackNavigator} from "@react-navigation/native-stack"
import Order from "../screen/Order";

const Stack = createNativeStackNavigator();

const CartStack = () => {
    return (
        <Stack.Navigator
        initialRouteName='Cart'
        screenOptions={{
            header: ({ navigation, route }) => (
                <Header
                    navigation={navigation}
                    title={
                        route.name === "Cart" ? "Shopping Cart" :
                            "Your Orders"
                    }
                    showMenuButton={false}
                    
                />
            )
        }}
        >
            <Stack.Screen name="Cart" component={Cart}/>
            <Stack.Screen name="Order" component={Order}/>
        </Stack.Navigator>
    )
}

export default CartStack