/* eslint-disable prettier/prettier */
import { View, Text } from 'react-native';
import { styles } from './styles/ProfileToSettingStyle';
import { useDispatch, useSelector } from 'react-redux';
import { getApi } from '../redux/games_api/API_Actions';
import { useEffect } from 'react';
const SettingScreen = () => {
    const dispatch = useDispatch();
    const fetchAPI = useSelector((state) => state.games.data);
    console.log("Result API:", JSON.stringify(fetchAPI));

    useEffect(() => {
        dispatch(getApi());
    }, []);
    return (
        <View style={styles.container}>
            <Text style={styles.text}>SettingScreen</Text>
        </View>
    );
};
export default SettingScreen;
