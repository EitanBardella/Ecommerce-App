import { StyleSheet, Text, View } from 'react-native'
import Home from './src/screen/Home'
import ProdCategory from './src/screen/ProdCategory'
import ProdDetail from './src/screen/ProdDetail'
import { useEffect, useState } from 'react'
import {useFonts} from "expo-font"


const App = () => {
//Ultima clase grabada 7, min 1:36:41
//Problemas a resolver: 
//1-No funciona el search gral
//2-Cuando quiero cambiar de categoria con el menu button desconoce la funcion categorySelectHandler

  //Estados
  const [categorySelect,setCategorySelect] = useState("")
  const [productSelect,setProductSelect] = useState("")

  //Funciones para actualizar estados
  const categorySelectHandler = (category) =>{
    setCategorySelect(category)
  }
  useEffect(()=>{
    console.log(categorySelect)
  },[categorySelect])
  
    //Fuentes
    const [fontsLoaded] = useFonts({
      'Quicksand-Bold': require('./assets/font/quickSand/Quicksand-Bold.ttf'),
    });
    //No muestre nada hasta que no cargue la font requerida
    if (!fontsLoaded) return null

  return (
    <>
      {categorySelect ? <ProdCategory categorySelect={categorySelect} /> : <Home  categorySelectHandler={categorySelectHandler} />}
    </>
  )
}

export default App

const styles = StyleSheet.create({})