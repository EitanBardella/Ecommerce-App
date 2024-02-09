import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';

const ProdxCategory = ({ item }) => {

    const prodDetailHandler = () =>{
        console.log("Hola")
    }

    return (
        <View style={styles.container}>
            <View></View>
            <View style={styles.imageContainer}>
                <Image source={{ uri: item.thumbnail }} style={styles.image} resizeMode= "cover" />
            </View>
            <View style={styles.textContainer} >
                {/* <Text style={styles.text}> {item.id} </Text> */}
                <Text style={styles.text}> {item.title} </Text>
                <Text style={styles.priceText}> $ {item.price} </Text>
            </View>
            <Pressable onPress={prodDetailHandler} style={styles.buttonContainer}>
                <Text style={styles.buttonText}>
                    Details
                </Text>
            </Pressable>
        </View>
    );
};

export default ProdxCategory;

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#FF0059",
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
        borderBottomColor:"#FFFFFF",
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
        color: "#FFFFFF",
    },
    buttonContainer:{
        marginVertical:10,
        backgroundColor:"#E56894",
        padding:10,
        borderWidth:2,
        borderColor:"#000000",
        borderRadius:10
    },
    buttonText:{
        color:"white",
        fontSize:15
    },
});
