/* eslint-disable prettier/prettier */
import React, { createContext, ReactNode } from 'react';
import axios, { AxiosInstance } from 'axios';
import constants from '../constants/AppConstants';

//Create Axios instance

const apiInstance: AxiosInstance = axios.create({
    baseURL: constants.BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

//Create API context for API instance
export const APIContext = createContext(apiInstance);

//type for the props of the AxiosNetworkProvider component
type AxiosNetworkProviderProps = {
    children: ReactNode;
};

//Create provider component to wrap app
export const AxiosNetworkProvider: React.FC<AxiosNetworkProviderProps> = ({ children }) => {
    return (
        <APIContext.Provider value={apiInstance}>{children}</APIContext.Provider>
    );
};
