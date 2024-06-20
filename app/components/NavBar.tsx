/* eslint-disable react/react-in-jsx-scope *//* eslint-disable prettier/prettier */
import { View, Text, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';

const NavBar = () => {
    const count = useSelector((state) => state.counter.value);
    return (
        <View style={styles.container}>
            <Text style={styles.text}>NAVBAR and its Count : {count}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: 'black',
        fontSize: 14,
        fontWeight: 'bold',
    },
});
export default NavBar;
