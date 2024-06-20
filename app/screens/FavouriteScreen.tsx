/* eslint-disable react/react-in-jsx-scope *//* eslint-disable prettier/prettier */
import { View, Text, Button } from 'react-native';
import { NavBar } from '../components';
import { styles } from './styles/ProfileToSettingStyle';
import store from '../redux/store';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, multiply } from '../redux/counter/CounterSlice';

const FavouriteScreen = () => {
    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();
    return (
        <View style={styles.container}>
            <NavBar />
            <Button title="-" onPress={() => dispatch(decrement())} />
            <Text style={styles.text}>Current Count is : {count}</Text>
            <Button title="+" onPress={() => dispatch(increment())} />
            <Button title="*" onPress={() => dispatch(multiply())} />
        </View>
    );
};
export default FavouriteScreen;
