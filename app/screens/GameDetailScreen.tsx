/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */
import { View, Text } from 'react-native';
import { styles } from './styles/ProfileToSettingStyle';
const GameDetailScreen = ({ navigation, route }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{route.params?.id}</Text>
            <Text style={styles.text}>
                {route.params?.title}
            </Text>
        </View>
    );
};
export default GameDetailScreen;