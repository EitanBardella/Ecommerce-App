import { Modal, StyleSheet, Text, View, Image, Pressable } from 'react-native'
import React, { useState } from 'react'
import AddButton from '../components/AddButton'
import { Entypo } from "@expo/vector-icons";
import { colores } from '../helpers/color';
import * as ImagePicker from 'expo-image-picker';
import { usePutImageMutation } from "../app/servicies/profile"
import { useSelector } from 'react-redux';


const ImageSelector = ({ navigation }) => {

    const [img, setImg] = useState("")
    
    
    //GALERY
    // const [modal, setModal] = useState(false)

    // const toggle = () => {
    //     setModal(!modal)
    // }

    const [selectedImage, setSelectedImage] = useState(null);

    // const selectedPhoto = (path) => {
    //     setSelectedImage(path)
    //     setModal(!modal)
    // };


    //CAMERA

    const [triggerImage] = usePutImageMutation()
    const localId = useSelector((state) => state.auth.localId)
    const takePhoto = async () => {
        const { granted } = await ImagePicker.requestCameraPermissionsAsync()

        if (granted) {
            let result = await ImagePicker.launchCameraAsync({
                allowsEditing: true,
                aspect: [4, 3],
                quality: 0.3,
                base64: true
            })

            if (!result.canceled) {
                setImg(`data:Image/jpeg;base64,` + result.assets[0].base64)
            }
        }
    }


    const confirmImage = () => {
        triggerImage({ img, localId })
        navigation.goBack()
    }



    return (
        <View style={styles.container} >
            <Image
                source={(img ? { uri: img } : require("../../assets/img/DefaultFoto.png")) || (selectedImage ? setImg(selectedImage) : require("../../assets/img/DefaultFoto.png"))}
                style={styles.img}
                resizeMode='cover'
            />
            {/* <AddButton title={"Profile Image´s Gallery "} onPress={toggle} /> */}

            <AddButton title={"Take a Photo"} onPress={takePhoto} />

            {img ? (
                <AddButton title={"Confirm Photo"} onPress={confirmImage} />
            ) : null}
            {selectedImage ? (
                <AddButton title={"Confirm Photo"} onPress={confirmImage} />
            ) : null}
            {/* Modal para la galeria de fotos desactivado temporalemnte */}
            {/* <Modal
                visible={modal}
                animationType="fade"
                transparent={true}
            >
                <View style={styles.main}>
                    <View style={styles.mainHeader}>
                        <Text style={styles.txt}>
                            Select a Profile Photo
                        </Text>
                        <Pressable onPress={toggle}>
                            <Entypo name={"cross"} size={36} color={colores.white} />
                        </Pressable>
                    </View>
                    <View style={styles.logoCont}>

                        <Pressable onPress={() => selectedPhoto("/YuiLogo.jpg")}>
                            <Image style={styles.logo} source={require("../../assets/img/YuiLogo.jpg")} />
                        </Pressable>
                        <Pressable>
                            <Image style={styles.logo} source={require("../../assets/img/YuiLogo.jpg")} />
                        </Pressable>

                    </View>

                </View>
            </Modal> */}

        </View>
    )
}

export default ImageSelector

const styles = StyleSheet.create({
    container: {
        flex: 2,
        backgroundColor: colores.white,
        alignItems: "center",
        gap: 30,
        paddingVertical: 20
    },
    main: {
        flex: 0.8,
        width: "90%",
        marginHorizontal: "5%",
        marginTop: 90,
        borderWidth: 2,
        backgroundColor: colores.white,

    },
    mainHeader: {
        flexDirection: "row",
        borderBottomWidth: 2,
        padding: 15,
        alignItems: "center",
        justifyContent: "center",
        gap: 10,
        backgroundColor: colores.black
    },
    txt: {
        textAlign: "center",
        color: colores.black,
        fontSize: 22,
        color: colores.white
    },
    logoCont: {

        flexDirection: "row",
        marginLeft: 25,
        gap: 30,
        marginVertical: 25
    },
    logo: {
        height: 135,
        width: 135
    },
    img: {
        height: 250,
        width: 250,
    },
})


{/* <FlatList
                            data={imga}
                            keyExtractor={item => item}
                            renderItem={imga.map(({item})=><Text key={item.id} > {item.id} </Text>)}
                            numColumns={2}
                            AVERIGUAR PQ NO FUNCION EL MAP 
                        /> */}