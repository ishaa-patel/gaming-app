/* eslint-disable react-hooks/exhaustive-deps *//* eslint-disable prettier/prettier */
import { NavigationContainer } from '@react-navigation/native';
import React, { useContext, useEffect, useState } from 'react';
import { AppStack, AuthStack } from '.';
import { AuthContext } from '../providers/AuthContextProvider';
import { View, StyleSheet } from 'react-native';
import { ActivityIndicator } from 'react-native';
import { AsyncStorageService } from '../service';

const AppMainNav = () => {
    const getStorage = new AsyncStorageService();
    const { isLoading } = useContext(AuthContext);
    const [isLogin, setIsLogin] = useState();
    if (isLoading) {
        return (
            <View style={styles.indicatorContainer}>
                <ActivityIndicator size={'large'} />
            </View>
        );
    }
    useEffect(() => {
        async function fetchData() {
            const getLoginData = await getStorage.getLoginData();
            setIsLogin(getLoginData?.isLogin);
        }
        fetchData();
    }, []);
    return (
        <NavigationContainer>
            {isLogin ? <AppStack /> : <AuthStack />}
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