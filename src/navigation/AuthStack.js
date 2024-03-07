import {createNativeStackNavigator} from "@react-navigation/native-stack"
import Login from "../components/Login";
import Register from "../components/Register";
import Header from "../components/Headerr";

const Stack = createNativeStackNavigator();

const AuthStack = () => {
    return (
        <Stack.Navigator
            initialRouteName="Login"
            screenOptions={(route, navigation)=>{
                return{
                    header: <Header title={ route.name === "Logn" ? "Inicio de Sesion" : "Registro" } navigation={navigation}/>
                }
            }}
        >
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Register" component={Register} />
        </Stack.Navigator>
    )
}

export default AuthStack