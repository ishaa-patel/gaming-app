/* eslint-disable react/react-in-jsx-scope *//* eslint-disable prettier/prettier */
import { SafeAreaView, View, Text, Image, TouchableOpacity } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import images from '../assets/images';
import constants from '../constants/AppConstants';
import { styles } from './styles/OnBoardingScreenStyle';

const OnBoardingScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={{ marginTop: 20 }}>
                <Text style={styles.gameOnText}>GAME ON</Text>
            </View>
            <View style={styles.imgContainer}>
                <Image source={images.introImg} style={styles.img} />
            </View>
            <TouchableOpacity
                style={styles.btnContainer}
                onPress={() => navigation.navigate(constants.NAV_LOGIN)}>
                <Text style={styles.btnText}>Let's Begin</Text>
                <MaterialIcons name="arrow-forward-ios" size={22} color="#fff" />
            </TouchableOpacity>
        </SafeAreaView>
    );
};
export default OnBoardingScreen;
