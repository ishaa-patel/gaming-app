/* eslint-disable prettier/prettier */
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import React from 'react';
import { styles } from './styles/CustomInputFieldStyle';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
export default function CustomInputField(
    { label, icon, inputType, keyboardType, fieldButtonLabel, fieldButtonFunction }
) {
    return (
        <View style={styles.inputField}>
            {icon}
            {inputType === 'password' ? (
                <TextInput
                    placeholder={label}
                    placeholderTextColor={'gray'}
                    keyboardType={keyboardType}
                    secureTextEntry={true}
                    style={styles.input}
                />) : (
                <TextInput
                    placeholder={label}
                    placeholderTextColor={'gray'}
                    keyboardType={keyboardType}
                    style={styles.input}
                />)
            }
            <TouchableOpacity onPress={fieldButtonFunction}>
                <Text style={styles.forgot}>{fieldButtonLabel}</Text>
            </TouchableOpacity>
        </View >
    );
};