
import Cart from "../screen/Cart";
import Headerr from "../components/Headerr"
import {createNativeStackNavigator} from "@react-navigation/native-stack"

const Stack = createNativeStackNavigator();

const CartStack = () => {
    return (
        <Stack.Navigator
        initialRouteName='Cart'
        screenOptions={{
            header: ({ navigation, route }) => (
                <Headerr
                    navigation={navigation}
                    title={
                        route.name === "CartStack" ? "Cart" :
                            route.name === "ProdCategory" ? route.params?.categorySelect :
                            "Product Detail"
                    }
                />
            )
        }}
        >
            <Stack.Screen name="Cart" component={Cart}/>
        </Stack.Navigator>
    )
}

export default CartStack