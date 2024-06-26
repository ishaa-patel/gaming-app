/* eslint-disable prettier/prettier */
import { StyleSheet } from 'react-native';
export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    contentContainer: {
        backgroundColor: '#ae0061',
    },
    userimg: {
        height: 70,
        width: 70,
        borderRadius: 40,
        marginBottom: 10,
        backgroundColor: '#fff',
    },
    userdetail: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    username: {
        color: '#fff',
        fontSize: 16,
        marginHorizontal: 5,
    },
    updateProfile: {
        fontWeight: 'bold',
        fontSize: 10,
        color: '#fff',
    },
    drawerlist: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: 10,
    },
    separator: {
        padding: 20,
        borderWidth: 0.5,
        borderTopColor: '#ccc',
    },
    footer: {
        paddingVertical: 15,
        flexDirection: 'row'
    },
    signout: {
        fontSize: 15,
        marginLeft: 20,
        color: 'black'
    }
})