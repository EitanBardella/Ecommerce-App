
import { StyleSheet, Text, View, Pressable, Modal } from 'react-native'
import React, { useState } from 'react'
import { Entypo } from "@expo/vector-icons";
import Category from './Category';


const MenuButton = ({categorySelectHandler}) => {

    const [menuVisible, setMenuVisible] = useState(false)

    const toggleMenu = () => {
        setMenuVisible(!menuVisible)
    }

    return (
        <View>
            <Pressable onPress={toggleMenu}>
                <Entypo name={'menu'} size={40} />
            </Pressable>
            <Modal
                visible={menuVisible}
                animationType="slide"
                transparent={true}
            >
                <View style={styles.modalContainer}>
                    {/* Aquí puedes agregar el contenido de tu modal */}
                    <View style={styles.headerModal}>
                        <Text style={styles.headerTextModal}>Categorias</Text>
                        <Pressable style={styles.headeCrossrModal}  onPress={toggleMenu}>
                            <Entypo name={"cross"} size={36} color="#F0EFF4" />
                        </Pressable>
                    </View>
                    <Category categorySelectHandler={categorySelectHandler} />
                </View>
            </Modal>
        </View>
    )
}

export default MenuButton

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent:"center",
        backgroundColor: 'rgba(0, 0, 0, 0.5)' // Fondo oscuro transparente
    },
    closeModal:{
        backgroundColor: 'rgba(0, 0, 0, 1)',
        color:"#F0EFF4",
        marginBottom:80,
        borderRadius:10
    },

    headerModal:{
        borderRadius:10,
        flexDirection:"row",
        alignItems:"center",
    },
    headerTextModal:{
        textAlign:"center",
        color:"#F0EFF4",
        fontSize:20,
        padding:10,
    },
    headeCrossrModal:{
        marginLeft:50
    },
})


// import { StyleSheet, Text, View,Pressable, Modal } from 'react-native'
// import React, { useState } from 'react'
// import {Entypo} from "@expo/vector-icons";

// const MenuButton = () => {

//     const [menu, setMenu] = useState(false)

//     const toggleMenu = ()=>{
//         setMenu(!menu)
//         console.log(menu)
//     }

//     return (
//         <View>
//             <Pressable>
//                 <Entypo onPress={toggleMenu} name={'menu'} size={40}/>
//             </Pressable>
//             <Modal 
//             visible={menu} 
//             animationType='slide'
//             transparent={true}
//             >
//                 <View style={styles.modalContainer}>
//                     {/* Aquí puedes agregar el contenido de tu modal */}
//                     <Text>Contenido del Modal</Text>
//                     <Pressable onPress={toggleMenu}>
//                         <Text>Cerrar</Text>
//                     </Pressable>
//                 </View>
//             </Modal>
//         </View>
//     )
// }

// export default MenuButton

// const styles = StyleSheet.create({})






// import { StyleSheet, Text, View, Button, Modal } from 'react-native'
// import React from 'react'

// const ModalDeleteBook = ({modal, openModal, deleteBook, bookSelected }) => {
//     return (
//         <Modal visible={modal} style={styles.modal} animationType='slide' onRequestClose={() => openModal({})}>
//             <View>
//                 <Text>¿Estás seguro de querer eliminarlo?</Text>
//                 <Button title='Sí' onPress={deleteBook} />
//                 <Button title='No' onPress={() => openModal({})} />
//             </View>
//         </Modal>
//     )
// }

// export default ModalDeleteBook

// const styles = StyleSheet.create({
//     //Modal
//     overlay:{},
//     modal:{},
// })