/* eslint-disable prettier/prettier */
import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
    },
    subcontainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    gamesListImg: {
        width: 60,
        height: 60,
        borderRadius: 10,
        margin: 10,
    },
    gameTitle: {
        color: '#333',
        fontSize: 14,
    },
    playBtn: {
        backgroundColor: '#0aada8',
        padding: 10,
        width: 100,
        borderRadius: 10,
    },
    playText: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 14,
    },
});