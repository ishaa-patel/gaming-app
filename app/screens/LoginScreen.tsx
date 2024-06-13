/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope *//* eslint-disable prettier/prettier */
import { SafeAreaView, View, Text, Image, TouchableOpacity, TextInput } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import images from '../assets/images';
import logos from '../assets/images/misc';
import { styles } from './styles/LoginScreenStyle';
import constants from '../constants/AppConstants';
import { CustomButton, CustomInputField } from '../components';

const LoginScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.subcontainer}>
                <View style={{ alignItems: 'center' }}>
                    <Image source={images.loginImg} style={styles.img} />
                </View>
                <Text style={styles.title}>Login</Text>
                <CustomInputField
                    label={"Email"}
                    icon={<MaterialIcons
                        name="alternate-email"
                        size={20}
                        color="#666"
                        style={{ marginRight: 5, marginTop: 5 }}
                    />}
                    keyboardType={"email-address"}
                />
                <CustomInputField
                    label={"Password"}
                    icon={<MaterialIcons
                        name="lock"
                        size={20}
                        color="#666"
                        style={{ marginRight: 5, marginTop: 5 }}
                    />}
                    inputType={"password"}
                    fieldButtonLabel={"Forgot?"}
                />
                <CustomButton label={"LOGIN"} onPress={() => { }} />
                <Text style={styles.loginWithTxt}>Or,Login With ..</Text>
                <View style={styles.customLoginContainer}>
                    <TouchableOpacity style={styles.customLogin}>
                        <Image source={logos.google}
                            style={styles.customLoginLogo} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.customLogin}>
                        <Image source={logos.facebook}
                            style={styles.customLoginLogo} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.customLogin}>
                        <Image source={logos.twitter}
                            style={styles.customLoginLogo} />
                    </TouchableOpacity>
                </View>
                <View style={styles.registerContainer}>
                    <Text style={{ color: '#333' }}>New to the app?</Text>
                    <TouchableOpacity onPress={() => { navigation.navigate(constants.NAV_REGISTER) }}>
                        <Text style={styles.registerTxt}> Register</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
};
export default LoginScreen;
