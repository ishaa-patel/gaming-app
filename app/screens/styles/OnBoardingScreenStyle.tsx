/* eslint-disable prettier/prettier */
import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    gameOnText: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#a80660',
    },
    imgContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    img: {
        height: 290,
        width: 290,
        transform: [{ rotate: '-15deg' }],
    },
    btnContainer: {
        backgroundColor: '#ae0061',
        padding: 20,
        width: '90%',
        flexDirection: 'row',
        borderRadius: 10,
        justifyContent: 'space-between',
        marginBottom: 50,
    },
    btnText: {
        fontWeight: 'bold',
        fontSize: 18,
        color: '#fff',

    },
});