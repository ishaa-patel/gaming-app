/* eslint-disable prettier/prettier */
import React, { createContext, useState } from 'react';
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
            isLogin: true,
        };
        setIsLoading(true);
        storage.setLoginData(loginValue);
        setIsLoading(false);
    };
    const logout = () => {
        storage.removeLoginData();
        setIsLoading(false);
    };
    return (
        <AuthContext.Provider value={{ login, logout, isLoading }}>
            {children}
        </AuthContext.Provider>
    );
};
