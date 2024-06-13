/* eslint-disable prettier/prettier */
import { Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { styles } from './styles/CustomButtonStyle';
export default function CustomButton({ label, onPress }) {
    return (
        <TouchableOpacity style={styles.Btn} onPress={onPress}>
            <Text style={styles.BtnTxt}>
                {label}
            </Text>
        </TouchableOpacity>
    )
}