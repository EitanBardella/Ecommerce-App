import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { colores } from '../helpers/color'
import InputForm from '../components/InputForm'
import SubmitButton from '../components/SubmitButton'
import { AntDesign } from "@expo/vector-icons"


const Register = ({ navigation }) => {

    //Estados
    //Guardar Email
    const [email, setEmail] = useState("")
    //Guadar PassWord
    const [password, setPassword] = useState("")
    //Guadar Confirm PassWord
    const [confirmPassword, setConfirmtPassword] = useState("")

    const onSubmit = () => {
        console.log(email)
        console.log(password)
        console.log(confirmPassword)
    }

    return (
        <View style={styles.main}>
            <View style={styles.container}>
                <Text style={styles.text}> Complete this Form </Text>
                <InputForm
                    label="Email"
                    value={email}
                    onChangeText={(t) => setEmail(t)}
                    isSecure={false}
                    error=""
                />
                <InputForm
                    label="Password"
                    value={password}
                    onChangeText={(t) => setPassword(t)}
                    isSecure={true}
                    error=""
                />
                <InputForm
                    label="Confirm Password"
                    value={confirmPassword}
                    onChangeText={(t) => setConfirmtPassword(t)}
                    isSecure={true}
                    error=""
                />
                <SubmitButton style={styles.submit} onPress={onSubmit} title='Submit' />
                <Text> Already Have an Account? </Text>
                <AntDesign name='arrowdown' size={35} />
                <Pressable onPress={() => navigation.navigate("Login")}>
                    <Text style={styles.register}>Sing In</Text>
                </Pressable>
            </View>
        </View>
    )
}

export default Register

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