/* eslint-disable prettier/prettier */
import { View, Text } from 'react-native';
import { styles } from './styles/ProfileToSettingStyle';
import { useContext, useEffect } from 'react';
import { APIContext } from '../providers/AxiosNetworkProvider';
import constants from '../constants/AppConstants';
const MomentsScreen = () => {
    const apiInstance = useContext(APIContext);
    const fetchData = async () => {
        try {
            const response = await apiInstance.get(constants.POST_URL);
            console.log('fetching data:', JSON.stringify(response.data));
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
            <Text style={styles.text}>MomentsScreen</Text>
        </View>
    );
};
export default MomentsScreen;
