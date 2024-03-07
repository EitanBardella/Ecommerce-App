import {  Pressable, StyleSheet, Text,  View } from 'react-native'
import React, { useState } from 'react'
import { colores } from '../helpers/color'
import InputForm from '../components/InputForm'
import SubmitButton from '../components/SubmitButton'
import {AntDesign} from "@expo/vector-icons"

const Login = ({navigation}) => {

    //Estados
    //Guardar Email
    const [email, setEmail] = useState("")
    //Guadar PassWord
    const [password, setPassword] = useState("")

    const onSubmit = ()=>{
        console.log("Formulario enviado")
    }

    return (
        <View style={styles.main}>
            <View style={styles.container}>
                <Text style={styles.text}> Login to start </Text>
                <InputForm
                    value={email}
                    onChangeText={(t) => setEmail(t)}
                />
                <InputForm
                    value={password}
                    onChangeText={(t) => setPassword(t)}
                />
                <SubmitButton style={styles.submit} onPress={onSubmit} title='Submit'/>
                <Text> First Time Here? </Text>
                <AntDesign name='arrowdown' size={35}/>
                <Pressable  onPress={()=> navigation.navigate("Register")  }>
                    <Text style={styles.register}>Register</Text>
                </Pressable>
            </View>
        </View>
    )
}

export default Login

const styles = StyleSheet.create({
    main: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    container: {
        width: "90%",
        backgroundColor: colores.midLightGrey,
        gap: 15,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: 20
    },
    text: {
        fontSize: 22,
    },
    submit: {
        fontSize: 14,
    },
    register: {
        fontSize: 14,
        color: colores.azul
    }

})