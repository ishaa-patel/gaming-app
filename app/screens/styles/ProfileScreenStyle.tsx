/* eslint-disable prettier/prettier */
import { StyleSheet } from 'react-native';
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    imgContainer: {
        height: 150,
        width: 150,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'lightgray',
        borderRadius: 100,
    },
    img: {
        height: 150,
        width: 150,
        borderRadius: 100,
    },
    title: {
        fontSize: 28,
        fontWeight: '500',
        color: '#ae0061',
        marginBottom: 30,
    },
    inputField: {
        flexDirection: 'row',
        borderColor: '#ccc',
        borderWidth: 0.7,
        borderRadius: 20,
        padding: 8,
        margin: 25,
    },
    input: {
        flex: 1,
        paddingVertical: 0,
        color: 'black',
    },
});
