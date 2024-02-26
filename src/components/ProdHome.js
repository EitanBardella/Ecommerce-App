import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import { colores } from "../helpers/color"; 
const ProdHome = ({item,navigation}) => {


    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image source={{ uri: item.thumbnail }} style={styles.image} resizeMode= "cover" />
            </View>
            <View style={styles.textContainer} >
                {/* <Text style={styles.text}> {item.id} </Text> */}
                <Text style={styles.text}> {item.title} </Text>
                <Text style={styles.priceText}> $ {item.price} </Text>
            </View>
            <Pressable onPress={()=>navigation.navigate("ProdDetail",{productId:item.id})}  style={styles.buttonContainer}  >
                <Text style={styles.buttonText}>
                    Details
                </Text>
            </Pressable>
        </View>
    );
}

export default ProdHome

const styles = StyleSheet.create({
    container: {
        backgroundColor: colores.midLightGrey,
        width: "40%",
        marginHorizontal: "5%",
        marginVertical: 10,
        padding: 10,
        alignItems:"center",
        justifyContent:"center",
        borderRadius:10
    },
    imageContainer:{
        alignItems:"center",
        justifyContent:"center",
        marginTop:2,
        marginBottom:5,
        paddingBottom:10,
        borderBottomWidth:2,
        borderBottomColor:colores.white,
    },
    image: {
        width: 100,
        height: 100 
    },
    textContainer:{
        alignItems:"center",
        width:"100%"
    },
    text: {
        textAlign:"center",
        fontSize: 18,
        color: "#FFFFFF",
    },
    priceText:{
        marginVertical:2,
        textAlign:"center",
        fontSize: 18,
        color: colores.white,
    },
    buttonContainer:{
        marginVertical:10,
        backgroundColor:colores.fuxia,
        padding:10,
        borderWidth:2,
        borderColor:colores.black,
        borderRadius:10
    },
    buttonText:{
        color:colores.white,
        fontSize:15
    },
});