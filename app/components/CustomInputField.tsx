/* eslint-disable prettier/prettier */
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { styles } from './styles/CustomInputFieldStyle';
export default function CustomInputField(
    { label,
        icon,
        inputType,
        keyboardType,
        fieldButtonLabel,
        fieldButtonFunction,
        value,
        onChangeText
    }
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
                    value={value}
                    onChangeText={onChangeText}
                />) : (
                <TextInput
                    placeholder={label}
                    placeholderTextColor={'gray'}
                    keyboardType={keyboardType}
                    style={styles.input}
                    value={value}
                    onChangeText={onChangeText}
                />)
            }
            <TouchableOpacity onPress={fieldButtonFunction}>
                <Text style={styles.forgot}>{fieldButtonLabel}</Text>
            </TouchableOpacity>
        </View >
    );
};