/* eslint-disable prettier/prettier */
import React, { createContext, useEffect, useState } from 'react';
import { AsyncStorageService } from '../service';
import { LoginData } from '../interface';

export const AuthContext = createContext();

// TODO :: Set value in ASYN :: 
// Next :: Home Screen :: GET Value from Asyn
// Condtion :: TRUE / FALSE 
// NAvgiation 

export const AuthProvider = ({ children }) => {
    const storage = new AsyncStorageService();
    const [isLoading, setIsLoading] = useState(false);

    const login = (email, password) => {
        const loginValue: LoginData = {
            email: email,
            password: password,
            isLogged: true,
        };
        setIsLoading(true);
        storage.setLoginData(loginValue);
        setIsLoading(false);
    };
    const isLoggedIn = async () => {
        const getLoginData = await storage.getLoginData();
        if (getLoginData.isLogged === true) {
            return true;
        }
    };
    useEffect(() => {
        isLoggedIn();
    });
    const logout = () => {
        storage.removeLoginData();
        setIsLoading(false);
    };
    return (
        <AuthContext.Provider value={{ login, logout, isLoading, isLoggedIn }}>
            {children}
        </AuthContext.Provider>
    );
}
