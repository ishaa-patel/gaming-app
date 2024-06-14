/* eslint-disable prettier/prettier */
import React, { createContext, useState, useEffect } from 'react';
import { AsyncStorageService } from '../service';
import { LoginData } from '../interface';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const storage = new AsyncStorageService();
    const [isLoading, setIsLoading] = useState(false);
    const [userLogin, setUserLogin] = useState(null);

    const login = (email, password) => {
        const loginValue: LoginData = {
            email: email,
            password: password,
        };
        setIsLoading(true);
        setUserLogin(storage.setLoginData(loginValue));
        console.log("set login value:", storage.setLoginData(loginValue));
        setIsLoading(false);
    };
    const logout = () => {
        setUserLogin(storage.removeLoginData());
        setIsLoading(false);
    };
    const isLoggedIn = async () => {
        try {
            setIsLoading(true);
            setUserLogin(storage.getLoginData());
            setIsLoading(false);
        }
        catch (e) {
            console.log(`isLoggedIn Error ${e}`)
        }
    };
    useEffect(() => {
        isLoggedIn();
    }, []);
    return (
        <AuthContext.Provider value={{ login, logout, isLoading, userLogin }}>
            {children}
        </AuthContext.Provider>
    );
}
