import {createNativeStackNavigator} from "@react-navigation/native-stack"

import Header from "../components/Headerr";
import Login from "../screen/Login";
import Register from "../screen/Register";

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
                            route.name === "Login" ? "Welcome !" : "Register Form"  }
                        showMenuButton={false}
                    />
                )
            }}
        >
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Register" component={Register}  />
        </Stack.Navigator>
    )
}

export default AuthStack