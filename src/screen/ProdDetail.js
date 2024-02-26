import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import prods from "../helpers/data/product.json"
import { useEffect, useState } from 'react'
import Header from '../components/Headerr'
import { colores } from '../helpers/color'
import Counter from '../components/Counter'
import { useDispatch } from 'react-redux';
import { addCartItem } from '../features/cart/cartSlice'


const ProdDetail = ({route}) => {
    const {productId}= route.params
    const [prod, setProd] = useState({})
    useEffect(() => {
        const prodFind = prods.find(prod => prod.id === productId)
        setProd(prodFind)
    }, [prods])
    
    const dispatch = useDispatch()

    return (
        <View style={styles.container} >
            <Text style={styles.textTitle} >{prod.title}</Text>
            <View style={styles.container2} >
                <Image style={styles.img} resizeMode='cover' source={{ uri: prod.thumbnail }} />
                <View style={styles.change}>
                    <Pressable >
                        <Text>Colors</Text>
                    </Pressable>
                    <Pressable >
                        <Text>Colors</Text>
                    </Pressable>
                    <Pressable >
                        <Text>Colors</Text>
                    </Pressable>
                </View>
            </View>
            <View style={styles.container3}>
                <View  style={styles.textContainer}>
                    <Text style={styles.textDescriptionTitle}>Description:</Text>
                    <Text style={styles.textDescription} >{prod.description}</Text>
                </View>
                <View  style={styles.textContainer}>
                    <Text style={styles.textDescriptionTitle} >Brand:</Text>
                    <Text style={styles.textDescription} >{prod.brand}</Text>
                </View>

                <Text> $ {prod.price}</Text>
            </View>
            <View style={styles.container4} >
                <Counter/>
                <Pressable style={styles.btnAdd} onPress={()=>dispatch(addCartItem(prod))} >
                    <Text style={styles.textAdd}   >Add Cart</Text>
                </Pressable>
            </View>
        </View>
    )
}

//Termianr estilos, Investigar si el Container 3 se puede hacer en Tabla

export default ProdDetail

const styles = StyleSheet.create({
    container:{
        width:"100%",
        flex:1,
        justifyContent:"start",
        alignItems:"center"
    },
    textTitle:{
        textAlign:"center",
        fontSize:50,
        borderBottomWidth:2,
        width:"90%"
        
    },
    container2:{
        
        flexDirection:"row-reverse",
        gap:20,
        marginVertical:20
    },
    img:{
        width:250,
        height:250,
    },
    change:{
        justifyContent:"center",
        alignItems:"center",
        borderWidth:2,
        borderColor:colores.black,
        backgroundColor:colores.white,
        width:"20%"
    },
    container3:{
        borderWidth:2,
        width:"90%",
        justifyContent:"center",
        alignItems:"start",
    },
    textContainer:{
        marginVertical:5,
        flexDirection:"row",
        width:"75%",
        gap:3
    },
    textDescriptionTitle:{
        fontSize:14,
        textDecorationLine:"underline",
        marginLeft:2

    },
    textDescription:{
        fontSize:14,
        lineHeight:24,
        textAlign:"left",
    },
    
    container4:{
        marginVertical:20,
        alignItems:"center",
        justifyContent:"center",
        gap:15
    },
    btnAdd:{
        width:110,

    },
    textAdd:{
        fontSize:20,
        borderWidth:2,
        padding:5,
        borderRadius:10
    }
})