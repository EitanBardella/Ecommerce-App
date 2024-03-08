import { StyleSheet, Text, View, Image, Modal } from 'react-native'
import {useState} from 'react'
import AddButton from '../components/AddButton'
import { colores } from '../helpers/color'
import { useSelector } from "react-redux";
import { useGetImageQuery } from "../app/servicies/profile";

const Profile = ({navigation}) => {


    const localId = useSelector(()=>{
        (state)=>state.auth.localId
    })
    const { data } = useGetImageQuery(localId)

    //INVESTIGAR MOVIENTO ENTRE PANTALLAS PERO DE UN MISMO MODAL

    const [modal, setModal] = useState(false)



    const toggle = () => {
        setModal(!modal)
    }

    return (
        <View style={styles.main}>
            {/* INVESTIGAR COMO HACER QUE APARESCA EL NOMBRE DEL USUARIO QUE INICIO SESION */}
            
            <Image 
                source={data ? {uri:data.image} :require("../../assets/img/DefaultFoto.png")}
                style={styles.img}
                resizeMode='cover'
            />
            <AddButton title={"Add Profile Image"} onPress={()=> navigation.navigate("ImageSelector")}/>

        </View>
    )
}

export default Profile

const styles = StyleSheet.create({
    main:{
        flex:2,
        backgroundColor:colores.white,
        alignItems:"center",
        gap:30,
        paddingVertical:20


    },
    img:{
        height:250,
        width:250,
    },
})