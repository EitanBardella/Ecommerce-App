import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { colores } from '../helpers/color'
import InputForm from '../components/InputForm'
import SubmitButton from '../components/SubmitButton'
import { AntDesign } from "@expo/vector-icons"
import { useRegisterMutation } from '../app/servicies/auth'
import { setUser } from '../features/auth/authSlice'
import { useDispatch } from 'react-redux'
import { registerSchema } from '../helpers/validation/authSchema'
import { insertSession } from '../helpers/db'

const Register = ({ navigation }) => {
    const dispatch = useDispatch()
    //Estados

    //Guardar Email
    const [email, setEmail] = useState("")
    //Guadar PassWord
    const [password, setPassword] = useState("")
    //Guadar Confirm PassWord
    const [confirmPassword, setConfirmtPassword] = useState("")

    //Estado para los errores de validacion
    const [errorEmail,setErroEmail]= useState("")
    const [errorPassword,setErrorPassword]= useState("")
    const [errorConfirmPassword,setErrorConfirmPassword]= useState("")

    //Estado para RegisterMutation
    //Primer Valor --> Ejecuta el post
    const [triggerRegister] = useRegisterMutation()

    const onSubmit = async () => {
        try {
            registerSchema.validateSync({ email, password, confirmPassword })
            //Obtencion del idToken que se encuentra adentro de data de Response
            const { data } = await triggerRegister({ email, password })
            insertSession(data)
            console.log(data)
            dispatch(setUser({ email: data.email, idToken: data.idToken, localId: data.localId }))
        }catch(error){
            setConfirmtPassword("")
            setEmail("")
            setPassword("")
            switch(error.path){
                case "email":
                    setErroEmail(error.message)
                    break
                case "password":
                    setErrorPassword(error.message)
                    break
                case "confirmPassword":
                    setErrorConfirmPassword(error.message)
                    break
                default:
                    break
            }
        }
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
                    error= {errorEmail}
                />
                <InputForm
                    label="Password"
                    value={password}
                    onChangeText={(t) => setPassword(t)}
                    isSecure={true}
                    error={errorPassword}
                />
                <InputForm
                    label="Confirm Password"
                    value={confirmPassword}
                    onChangeText={(t) => setConfirmtPassword(t)}
                    isSecure={true}
                    error={errorConfirmPassword}
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