/* eslint-disable react/react-in-jsx-scope *//* eslint-disable prettier/prettier */
import { useState, useEffect, useMemo } from 'react';
import { View, Text, Button, Alert } from 'react-native';
import { styles } from './styles/ProfileToSettingStyle';

//useMemo Practice
const nums = new Array(30_00_000).fill(0).map((_, i) => {
    return {
        index: i,
        isMagical: i === 20_00_000,
    };
});
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

    //useMemo
    const [numbers, setNumbers] = useState(nums);
    //const magical = numbers.find(item => item.isMagical === true); // Expensive Computation
    const magical = useMemo(() => numbers.find(item => item.isMagical === true), [numbers]);
    return (
        <View style={styles.container}>
            <Text>Magical number is: {magical?.index}</Text>
            <Text style={styles.text}>Count is : {count}</Text>
            <Button title="Count" onPress={() => setCount((count) => count + 1)} />
        </View>
    );
};
export default CartScreen;
