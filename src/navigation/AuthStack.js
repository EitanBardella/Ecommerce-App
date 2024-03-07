import {createNativeStackNavigator} from "@react-navigation/native-stack"
import Login from "../components/Login";
import Register from "../components/Register";
import Header from "../components/Headerr";

const Stack = createNativeStackNavigator();

const AuthStack = () => {
    return (
        <Stack.Navigator
            initialRouteName="Login"
            screenOptions={{
                header: ({ navigation, route }) => (
                    <Header
                        navigation={navigation}
                        title={
                            route.name === "Login" ? "Inicio de Sesion" : "Register"  }
                    />
                )
            }}
        >
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Register" component={Register} />
        </Stack.Navigator>
    )
}

export default AuthStack