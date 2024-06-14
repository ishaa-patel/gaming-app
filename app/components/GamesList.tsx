/* eslint-disable react/react-in-jsx-scope *//* eslint-disable prettier/prettier */
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { windowWidth } from '../utils/Dimensions';
import { styles } from './styles/GamesListStyle';
export default function GamesList({ photo, title, subTitle, isFree, price, onPress }) {
    return (
        <View style={styles.container}>
            <View style={styles.subcontainer}>
                <Image source={photo} style={styles.gamesListImg} />
                <View style={{ width: windowWidth - 220 }}>
                    <Text style={styles.gameTitle}>{title}</Text>
                    <Text style={[styles.gameTitle, { textTransform: 'uppercase' }]}>{subTitle}</Text>
                </View>
            </View>
            <TouchableOpacity
                style={styles.playBtn}
                onPress={onPress}>
                <Text style={styles.playText}>
                    {isFree === 'Yes' && 'Play'}
                    {isFree === 'No' && price}
                </Text>
            </TouchableOpacity>
        </View >
    );
}