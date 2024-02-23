
import Home from '../screen/Home'
import ProdCategory from '../screen/ProdCategory'
import ProdDetail from '../screen/ProdDetail'
import Headerr from "../components/Headerr"
import {createNativeStackNavigator} from "@react-navigation/native-stack"

const Stack = createNativeStackNavigator();

const ShopStack = () => {
    return (
        <Stack.Navigator
            initialRouteName='Home'
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
            <Stack.Screen name='Home' component={Home} />
            <Stack.Screen name='ProdCategory' component={ProdCategory} />
            <Stack.Screen name='ProdDetail' component={ProdDetail} />
        </Stack.Navigator>
    )
}



export default ShopStack