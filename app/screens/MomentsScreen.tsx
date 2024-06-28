/* eslint-disable prettier/prettier */
import { View, Text } from 'react-native';
import { styles } from './styles/ProfileToSettingStyle';
import { useContext, useEffect, useState } from 'react';
import { APIContext } from '../providers/AxiosNetworkProvider';
import constants from '../constants/AppConstants';
const MomentsScreen = () => {
    const [value, setValue] = useState();
    const apiInstance = useContext(APIContext);
    const fetchData = async () => {
        try {
            const response = await apiInstance.get(constants.POST_URL);
            setValue(response.data);
            // console.log('fetching data:', JSON.stringify(response.data));
        }
        catch (err) {
            console.log('Error at fetching data:', err);
        }
    };
    useEffect(() => {
        fetchData();
    }, []);
    return (
        <View style={styles.container}>
            <Text style={[styles.text, { paddingBottom: 30 }]}>Resultant Data:</Text>
            <Text style={styles.text}>Title: {JSON.stringify(value.title)}</Text>
            <Text style={styles.text}>Body: {JSON.stringify(value.body)}</Text>
        </View>
    );
};
export default MomentsScreen;
