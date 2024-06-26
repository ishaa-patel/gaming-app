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
        height: 180,
        width: 180,
        justifyContent: 'center',
        alignItems: 'center',
    },
    img: {
        height: 150,
        width: 150,
        borderRadius: 100,
        borderWidth: 0.1,
        borderColor: 'gray',
        backgroundColor: 'rgba(52, 52, 52, 0.1)',
    },
    addImgLogo: {
        color: '#fff',
        alignSelf: 'center',
        position: 'absolute',
        top: 110,
        left: 100,
        backgroundColor: 'rgba(52, 52, 52, 0.6)',
        paddingHorizontal: 10,
        paddingVertical: 10,
        borderRadius: 100,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#ae0061',
        marginBottom: 80,
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
    cancelBtn: {
        color: '#ae0061',
        fontWeight: 'bold',
    },
});
