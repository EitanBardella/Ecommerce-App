import { StatusBar, StyleSheet, Text, View } from 'react-native'
import Home from './src/screen/Home'
import ProdCategory from './src/screen/ProdCategory'
import ProdDetail from './src/screen/ProdDetail'
import { useEffect, useState } from 'react'
import {useFonts} from "expo-font"
import { colores } from './src/helpers/color'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Headerr from "./src/components/Headerr"


const Stack = createNativeStackNavigator();

const App = () => {
//Problemas a resolver: 
//1-No funciona el search gral
//2-Cuando quiero cambiar de categoria con el menu button desconoce la funcion categorySelectHandler

  //Fuentes
  const [fontsLoaded] = useFonts({
    'Quicksand-Bold': require('./assets/font/quickSand/Quicksand-Bold.ttf'),
  });
  //No muestre nada hasta que no cargue la font requerida
  if (!fontsLoaded) return null

  //Estados
  // const [categorySelect,setCategorySelect] = useState("")
  //Productos por categoria
  // const [productId,setProductId] = useState(0)
  // console.log(productId)

  // }
  //Prods del Home
  //Error: 2 children with same id
  // const [productHomeId,setProductHomeId] = useState(0)
  // const selectProdHomeId=(id)=>{
  //   setProductHomeId(id)
  //   console.log("Hola")
  // }


  //Funciones para actualizar estados
  // const categorySelectHandler = (category) =>{
  //   setCategorySelect(category)
  // }
  // useEffect(()=>{
  //   console.log(categorySelect)
  // },[categorySelect])
  // const selectProdId=(id)=>{
  //   setProductId(id)


  return (
    <>
      <StatusBar backgroundColor={colores.yellow}/>
      <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Home'
        screenOptions={({route}) => {
          return {
            header: () => {
              return <Headerr navigation={navigation} title={route.name === "Home" ? "Home" : 
                                    route.name === "ProdCategory" ? route.params.categorySelect:"Detalle" } />
            }
          }
        }}
      >
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="ProdCategory" component={ProdCategory} />
          <Stack.Screen name="ProdDetail" component={ProdDetail} />
        </Stack.Navigator>
      </NavigationContainer>
    </>



    // <View style={styles.container} >
    //   {categorySelect ?
    //   productId ? <ProdDetail productId={productId} /> 
    //     : 
    //     <ProdCategory selectProdId={selectProdId} categorySelect={categorySelect} />
    //   :
    //   <Home   categorySelectHandler={categorySelectHandler} />}
    // </View>
  )
}

export default App

const styles = StyleSheet.create({
  container:{flex:1}
})