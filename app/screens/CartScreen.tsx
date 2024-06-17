/* eslint-disable react/react-in-jsx-scope *//* eslint-disable prettier/prettier */
import { useState, useEffect } from 'react';
import { View, Text, Button, Alert } from 'react-native';
import { styles } from './styles/ProfileToSettingStyle';
const CartScreen = () => {
    //useEffect Practice
    const [count, setCount] = useState(0);
    const [first, setFirst] = useState(0);

    //Case:1 Run on every render
    useEffect(() => {
        Alert.alert('Running on every render');
    });

    //Case:2 Run only on first render
    useEffect(() => {
        Alert.alert('Running on first render');
    }, [first]);

    //Case:3 Run only when certain values is changed
    useEffect(() => {
        Alert.alert('Count Updated!');
    }, [count]);
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Count is : {count}</Text>
            <Button title="Count" onPress={() => setCount((count) => count + 1)} />
        </View>
    );
};
export default CartScreen;
