import React, { useState, useEffect } from 'react';
import { Pressable, StyleSheet, Text, TextInput, View, Keyboard } from 'react-native';
import { FontAwesome5 } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import prods from "../helpers/data/product.json";

const Search = () => {
    // Estado para almacenar el texto del input
    const [input, setInput] = useState("");
    // Funcion para actualizar el input
    const inpuHandler = (text) => setInput(text);
    // Estado para keyWord
    const [keyword, setKeyword] = useState("");
    // Funcion para la KeyWord
    const keywordHandler = () => {
        // Filtrar los productos basado en la palabra clave
        setKeyword(prods.filter(prods => prods.title.includes(keyword)));
    };
    // Funcion para la lupa
    const search = () => {
        keywordHandler(input);
        Keyboard.dismiss();
    };

    return (
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
            <Pressable style={styles.icon}>
                <Entypo name={"circle-with-cross"} size={36} color="#2D2D2D" />
            </Pressable>
        </View>
    );
}

export default Search;

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        gap: 10,
        backgroundColor: "#F4D678",
    },
    input: {
        backgroundColor: "#FFFFFF",
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
    }
});
