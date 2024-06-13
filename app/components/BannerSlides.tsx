/* eslint-disable prettier/prettier */
import { View, Image, StyleSheet } from 'react-native';
export default function BannerSlider({ data }) {
    return (
        <View>
            <Image source={data.image} style={styles.carouselImg} />
        </View>
    );
}
const styles = StyleSheet.create({
    carouselImg: {
        height: 150,
        width: 300,
        borderRadius: 10
    }
})
