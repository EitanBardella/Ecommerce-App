// import {createNativeStackNavigator} from "@react-navigation/native-stack"
// import Header from "../components/Headerr"
// import Order from "../screen/Order";

// const Stack = createNativeStackNavigator();

// const OrderStack = () => {
//     return (
//         <Stack.Navigator
//         initialRouteName='Order'
//         screenOptions={{
//             header: ({ navigation, route }) => (
//                 <Header
//                     navigation={navigation}
//                     title={
//                         route.name === "Home" ? "Home" :
//                             route.name === "ProdCategory" ? route.params?.categorySelect :
//                             "Product Detail"
//                     }
//                 />
//             )
//         }}
//         >
//             <Stack.Screen name="Order" component={Order}/>
//         </Stack.Navigator>
//     )
// }

// export default OrderStack