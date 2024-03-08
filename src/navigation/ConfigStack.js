

import Header from "../components/Headerr"
import {createNativeStackNavigator} from "@react-navigation/native-stack"
import Profile from "../screen/Profile";
import Config from "../screen/Config";
import ImageSelector from "../screen/ImageSelector";



const Stack = createNativeStackNavigator();

const ConfigStack = () => {

    return (
        <Stack.Navigator
        initialRouteName='Config'
        screenOptions={{
            header: ({ navigation, route }) => (
                <Header
                    navigation={navigation}
                    title={
                        route.name === "Config" ? "Settings" :
                        route.name === "Profile" ? "User Profile" : "Image Selector"
                    }
                    showMenuButton={false}
                    
                />
            )
        }}
        >
            <Stack.Screen name="Config" component={Config} />
            <Stack.Screen name="Profile" component={Profile} />
            <Stack.Screen name="ImageSelector" component={ImageSelector} />

        </Stack.Navigator>
    )
}

export default ConfigStack