import React, { useState, useEffect } from 'react';
import { Pressable, StyleSheet, Text, TextInput, View, Keyboard } from 'react-native';
import { FontAwesome5 } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { colores } from "../helpers/color"; 

const Search = ({keywordHandler}) => {
    // Estado para almacenar el texto del input
    const [input, setInput] = useState("");
    const [error, setError] = useState("")
    // Funcion para actualizar el input
    const inpuHandler = (text) => setInput(text);
    // Funcion para la KeyWord

    // Funcion para la lupa
    const search = () => {
        const expression = /[!@#$%^&*()_+\-=\[\]{};':\\|,.<>\/?]/
            if(expression.test(input)){
                setError("error,caracter invalido")
                return
            }
        setError("")
        keywordHandler(input);
        Keyboard.dismiss();
    };

    const reset = ()=>{
        inpuHandler("")
        keywordHandler("")
        setError("")
    }

    return (
        <View>
            <View style={styles.container} >
                <TextInput
                    placeholder='Search...'
                    style={styles.input}
                    value={input}
                    onChangeText={inpuHandler}
                />
                <Pressable style={styles.icon} onPress={search}>
                    <FontAwesome5 name={"search"} size={30} color="#2D2D2D" />
                </Pressable>
                <Pressable style={styles.icon} onPress={reset}>
                    <Entypo name={"circle-with-cross"} size={36} color="#2D2D2D" />
                </Pressable>
            </View>
            {error ? <Text style={styles.textError} > {error} </Text>:null}
        </View>
    );
}

export default Search;

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        gap: 10,
        backgroundColor: colores.yellow,
    },
    input: {
        backgroundColor:colores.white,
        borderWidth: 2,
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 5,
        width: 280,
        marginLeft: 10,
        marginVertical: 10
    },
    icon: {
        marginVertical: 12
    },
    textError:{
        fontSize:25,
        backgroundColor:colores.red,
        width:"100%",
        height:45,
        textAlign:"center",
        alignItems:"center",
        justifyContent:"center"
    }
});
