/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope *//* eslint-disable prettier/prettier */
import { SafeAreaView, ScrollView, View, Text, Image, TouchableOpacity, TextInput } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import images from '../assets/images';
import logos from '../assets/images/misc';
import { styles } from './styles/RegisterScreenStyle';
import { CustomInputField } from '../components';
import CustomButton from '../components/CustomButton';
import DatePicker from 'react-native-date-picker';
import { useState } from 'react';

const RegisterScreen = ({ navigation }) => {
    const [date, setDate] = useState(new Date())
    const [open, setOpen] = useState(false)
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.subcontainer} showsVerticalScrollIndicator={false}>
                <View style={{ alignItems: 'center' }}>
                    <Image source={images.registerImg} style={styles.img} />
                </View>
                <Text style={styles.title}>Register</Text>
                <View style={styles.customLoginContainer}>
                    <TouchableOpacity style={styles.customLogin}>
                        <Image source={logos.google} style={styles.customLoginLogo} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.customLogin}>
                        <Image source={logos.facebook} style={styles.customLoginLogo} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.customLogin}>
                        <Image source={logos.twitter} style={styles.customLoginLogo} />
                    </TouchableOpacity>
                </View>
                <Text style={styles.registerWithTxt}>Or, Register With..</Text>
                <CustomInputField
                    label={'Full-Name'}
                    icon={<MaterialIcons
                        name="person"
                        size={20}
                        color="#666"
                        style={{ marginRight: 5, marginTop: 5 }}
                    />}
                />
                <CustomInputField
                    label={'Email'}
                    icon={<MaterialIcons
                        name="alternate-email"
                        size={20}
                        color="#666"
                        style={{ marginRight: 5, marginTop: 5 }}
                    />}
                    keyboardType={'email-address'}
                />
                <CustomInputField
                    label={'Password'}
                    icon={<MaterialIcons
                        name="lock"
                        size={20}
                        color="#666"
                        style={{ marginRight: 5, marginTop: 5 }}
                    />}
                    inputType={'password'}
                />
                <CustomInputField
                    label={'Confirm Password'}
                    icon={<MaterialIcons
                        name="lock"
                        size={20}
                        color="#666"
                        style={{ marginRight: 5, marginTop: 5 }}
                    />}
                />
                <View style={styles.dobBtn}>
                    <MaterialIcons
                        name="calendar-month"
                        size={20}
                        color="#666"
                        style={{ marginRight: 5, marginTop: 5 }}
                    />
                    <TouchableOpacity onPress={() => setOpen(true)}>
                        <Text style={{ color: 'gray', marginLeft: 5, marginTop: 5 }}>Date-of-Birth</Text>
                    </TouchableOpacity>
                </View>

                <DatePicker
                    modal
                    open={open}
                    date={date}
                    mode='date'
                    onConfirm={(date) => {
                        setOpen(false)
                        setDate(date)
                    }}
                    onCancel={() => {
                        setOpen(false)
                    }}
                />
                <CustomButton label={'REGISTER'}
                    onPress={() => { }}
                />
                <View style={styles.registerContainer}>
                    <Text style={{ color: '#333' }}>Already Register?</Text>
                    <TouchableOpacity onPress={() => { navigation.goBack() }}>
                        <Text style={styles.registerTxt}> Login</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};
export default RegisterScreen;
