/* eslint-disable prettier/prettier */
import { StyleSheet } from 'react-native';
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    subcontainer: {
        paddingHorizontal: 25,
    },
    img: {
        height: 300,
        width: 300,
        transform: [{ rotate: '-15deg' }]
    },
    title: {
        fontSize: 28,
        fontWeight: '500',
        color: '#333',
        marginBottom: 30,
    },
    loginWithTxt: {
        textAlign: 'center',
        color: '#666',
        marginBottom: 30,
    },
    customLoginContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 30
    },
    customLogin: {
        borderColor: '#ddd',
        borderWidth: 2,
        borderRadius: 10,
        paddingHorizontal: 30,
        paddingVertical: 10,
    },
    customLoginLogo: {
        height: 30,
        width: 30,
    },
    registerTxt: {
        color: '#ae0061',
        fontWeight: 'bold',
    },
    registerContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 35,
    },
});
