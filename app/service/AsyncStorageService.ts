/* eslint-disable prettier/prettier */
import AsyncStorage from '@react-native-async-storage/async-storage';
import { LoginData } from '../interface';
import { StorageKeys } from '../constants/StorageKeys';

export class AsyncStorageService {
    setLoginData(loginData: LoginData) {
        this._setItem(StorageKeys.LOGIN_DATA, loginData);
    }
    async getLoginData(): Promise<LoginData> {
        const loginData = await this._getItem(StorageKeys.LOGIN_DATA);
        return JSON.parse(loginData) as LoginData;
    }
    removeLoginData() {
        this._removeItem(StorageKeys.LOGIN_DATA);
    }

    private async _setItem(key: StorageKeys, value: object): Promise<void> {
        try {
            await AsyncStorage.setItem(key, JSON.stringify(value));
        } catch (e) {
            console.log('SetItemError: ', e);
        }
    }

    _getItem(key: StorageKeys): Promise<string> {
        try {
            const value = AsyncStorage.getItem(key);
            return value;
        } catch (e) {
            return null;
        }
    }
    private async _removeItem(key: StorageKeys): Promise<void> {
        try {
            await AsyncStorage.removeItem(key);
        } catch (e) {
            console.log('RemoveItemError: ', e);
        }
    }
}