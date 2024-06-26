/* eslint-disable prettier/prettier */
import { StyleSheet } from 'react-native';
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    userImg: {
        width: 35,
        height: 35,
        backgroundColor: 'rgba(52,52,52,0.1)',
        borderRadius: 25,
    },
    subContainer: {
        padding: 20,
    },
    userHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    username: {
        color: 'black',
        fontSize: 16,
        fontWeight: 'bold',
    },
    searchBar: {
        margin: 5,
        flexDirection: 'row',
        borderRadius: 8,
        borderWidth: 0.5,
        borderColor: '#C6C6C6',
        paddingHorizontal: 10,
    },
    searchIcon: {
        margin: 5,
        marginTop: 15,
    },
    searchInput: {
        flex: 1,
    },
    searchBarBottomContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 15,
    },
    seeAll: {
        color: '#0aada8',
        textDecorationLine: 'underline',
    }
})