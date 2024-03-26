import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';

const ModalPay = ({ navigation }) => {
    const [cardNumber, setCardNumber] = useState('');
    const [expiry, setExpiry] = useState('');
    const [cvc, setCvc] = useState('');
    const [amount, setAmount] = useState('');

    const handlePayment = () => {
        if (!cardNumber || !expiry || !cvc || !amount) {
            Alert.alert('Error', 'Por favor, completa todos los campos');
            return;
        }
        // Aquí podrías agregar la lógica para procesar el pago
        Alert.alert('Éxito', 'Pago procesado correctamente');
                // Navegar a la pantalla "Order" después de confirmar el pago
                navigation.navigate("Order");
    };

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Introduce el número de tarjeta:</Text>
            <TextInput
                style={{ height: 40, width: 200, borderColor: 'gray', borderWidth: 1, marginVertical: 10, paddingHorizontal: 10 }}
                placeholder="Número de tarjeta"
                keyboardType="numeric"
                value={cardNumber}
                onChangeText={text => setCardNumber(text)}
            />
            <Text>Fecha de vencimiento:</Text>
            <TextInput
                style={{ height: 40, width: 200, borderColor: 'gray', borderWidth: 1, marginVertical: 10, paddingHorizontal: 10 }}
                placeholder="MM/AA"
                value={expiry}
                onChangeText={text => setExpiry(text)}
            />
            <Text>CVC:</Text>
            <TextInput
                style={{ height: 40, width: 200, borderColor: 'gray', borderWidth: 1, marginVertical: 10, paddingHorizontal: 10 }}
                placeholder="CVC"
                keyboardType="numeric"
                value={cvc}
                onChangeText={text => setCvc(text)}
            />
            <Text>Monto:</Text>
            <TextInput
                style={{ height: 40, width: 200, borderColor: 'gray', borderWidth: 1, marginVertical: 10, paddingHorizontal: 10 }}
                placeholder="Monto"
                keyboardType="numeric"
                value={amount}
                onChangeText={text => setAmount(text)}
            />
            <Button title="Confirmar" onPress={handlePayment} />

        </View>
    );
};

export default ModalPay;



// import { StyleSheet, Text, View } from 'react-native'
// import React from 'react'
// import {Fontisto} from "@expo/vector-icons"

// const ModalPay = ({navigation}) => {
//     //HACER MODAL DE PAGO y AVERIGUAR COMO POENER ORDENES EN EL HEADER DE CART
//     return (
//         <View>
//             <Text>ModalPay</Text>
//             <Fontisto name="shopping-bag-1" size={34} onPress={()=>navigation.navigate("Order")} />
//         </View>
//     )
// }

// export default ModalPay

// const styles = StyleSheet.create({})