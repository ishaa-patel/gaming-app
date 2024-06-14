/* eslint-disable prettier/prettier */
import AsyncStorage from '@react-native-async-storage/async-storage';
import { LoginData } from '../interface';
import { StorageKeys } from '../constants/StorageKeys';

export class AsyncStorageService {
    async setLoginData(loginData: LoginData): Promise<void> {
        await this._setItem(StorageKeys.LOGIN_DATA, JSON.stringify(loginData));
    }
    async getLoginData(): Promise<void> {
        await this._getItem(StorageKeys.LOGIN_DATA);
    }
    async removeLoginData(): Promise<void> {
        await this._removeItem(StorageKeys.LOGIN_DATA);
    }

    private async _setItem(key: StorageKeys, value: string): Promise<void> {
        try {
            await AsyncStorage.setItem(key, value);
        } catch (e) {
            console.log('SetItemError: ', e);
        }
    }

    private async _getItem(key: StorageKeys): Promise<void> {
        try {
            await AsyncStorage.getItem(key);
        } catch (e) {
            console.log('GetItemError: ', e);
        }
    }
    private async _removeItem(key: StorageKeys): Promise<void> {
        try {
            await AsyncStorage.removeItem(key);
        } catch (e) {
            console.log('RemoveItemError: ', e);
        }
    }
};