import {  Pressable, StyleSheet, Text,  View } from 'react-native'
import React, { useState } from 'react'
import { colores } from '../helpers/color'
import InputForm from '../components/InputForm'
import SubmitButton from '../components/SubmitButton'
import {AntDesign} from "@expo/vector-icons"
import { useLoginMutation } from '../app/servicies/auth'
import {  useDispatch } from 'react-redux'
import { setUser } from '../features/auth/authSlice'
import { loginSchema } from '../helpers/validation/authSchema'
import { deleteSession, insertSession } from '../helpers/db'


const Login = ({navigation}) => {
    const dispatch= useDispatch()
    //Estados
    //Guardar Email
    const [email, setEmail] = useState("")
    //Guadar PassWord
    const [password, setPassword] = useState("")
    //Mutacion
    const [triggerLogin] = useLoginMutation()

    //Validacion
    const [errorEmail,setErrorEmail]= useState("")
    const [errorPassword,setErrorPassword]= useState("")

    const onSubmit = async ()=>{
        try{
            
            loginSchema.validateSync({ email, password})
            const {data} = await triggerLogin({email, password})
            deleteSession()
            insertSession(data)
            dispatch(setUser({email:data.email,idToken: data.idToken, localId: data.localId}))
            
        }catch(error){
            
            setEmail("")
            setPassword("")
            switch(error.path){
                case "email":
                    setErrorEmail(error.message)
                    break
                case "password":
                    setErrorPassword(error.message)
                    break
                default:
                    break
                    
            }
        }
        
    }

    return (
        <View style={styles.main}>
            <View style={styles.container}>
                <Text style={styles.text}> Login to start </Text>
                <InputForm
                    label="Email"
                    value={email}
                    onChangeText={(t) => setEmail(t)}
                    isSecure={false}
                    error={errorEmail}
                />
                <InputForm
                    label="Password"
                    value={password}
                    onChangeText={(t) => setPassword(t)}
                    isSecure={true}
                    error={errorPassword}
                />
                <SubmitButton style={styles.submit} onPress={onSubmit} title='Submit'/>
                <Text> First Time Here? </Text>
                <AntDesign name='arrowdown' size={35}/>
                <Pressable  onPress={()=> navigation.navigate("Register")  }>
                    <Text style={styles.register}>Sing Up</Text>
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