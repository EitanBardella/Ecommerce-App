import { StatusBar, StyleSheet, Text, View } from 'react-native'
import {useFonts} from "expo-font"
import { colores } from './src/helpers/color'
import MainNav from './src/navigation/MainNav'
//Redux
import { store } from './src/app/store'
import { Provider } from 'react-redux'
import { init } from './src/helpers/db'

init()

const App = () => {
//Cosas para hacer 
//1-Tab Navigation 2-State y redux

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
      <Provider store={store}>
        <MainNav/>
      </Provider>
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