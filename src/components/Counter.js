import { Button, StyleSheet, Text, View } from 'react-native'
import { useSelector,useDispatch } from 'react-redux';
import { increment, decrement } from '../features/counter/counterSlice';
import { colores } from '../helpers/color';



const Counter = () => {
    const dispatch = useDispatch()
    const count = useSelector((state)=>state.counter.value)
    return (
        <View style={styles.container} >
            <Button style={styles.btn} title='Add' onPress={()=>dispatch(increment())}/>
            <Text style={styles.texto}> {count} </Text>
            <Button style={styles.btn} title='Discount' onPress={()=>dispatch(decrement())}/>
        </View>
    )
    }

export default Counter

const styles = StyleSheet.create({
    container:{
        flexDirection:"row",
        alignItems:"center",
        gap:10,
        marginLeft:30
    },
    texto:{
        color:colores.darkGreyShadow,
        fontSize:16
    },
    btn:{
        padding:10,
        height:10,
        width:20
    }
})