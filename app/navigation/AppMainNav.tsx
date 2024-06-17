/* eslint-disable prettier/prettier */
import { NavigationContainer } from '@react-navigation/native';
import React, { useContext } from 'react';
import { AppStack, AuthStack } from '.';
import { AuthContext } from '../providers/AuthContextProvider';
import { View, StyleSheet } from 'react-native';
import { ActivityIndicator } from 'react-native';

const AppMainNav = () => {
    const { isLoading, isLoggedIn } = useContext(AuthContext);
    if (isLoading) {
        return (
            <View style={styles.indicatorContainer}>
                <ActivityIndicator size={'large'} />
            </View>
        );
    }
    return (
        <NavigationContainer>
            {isLoggedIn ? <AppStack /> : <AuthStack />}
        </NavigationContainer>
    );
};
export default AppMainNav;

const styles = StyleSheet.create({
    indicatorContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
