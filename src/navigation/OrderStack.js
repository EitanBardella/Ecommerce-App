import {createNativeStackNavigator} from "@react-navigation/native-stack"
import Headerr from "../components/Headerr"
import Order from "../screen/Order";

const Stack = createNativeStackNavigator();

const OrderStack = () => {
    return (
        <Stack.Navigator
        initialRouteName='Order'
        screenOptions={{
            header: ({ navigation, route }) => (
                <Headerr
                    navigation={navigation}
                    title={
                        route.name === "Home" ? "Home" :
                            route.name === "ProdCategory" ? route.params?.categorySelect :
                            "Product Detail"
                    }
                />
            )
        }}
        >
            <Stack.Screen name="Order" component={Order}/>
        </Stack.Navigator>
    )
}

export default OrderStack