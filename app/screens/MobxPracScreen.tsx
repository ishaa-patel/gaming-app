/* eslint-disable prettier/prettier */
import React from 'react';
import { observer } from 'mobx-react';
import { UserStoreContext } from '../mobx/UserStore';
import { Button, StyleSheet, Text, View } from 'react-native';
import { useContext } from 'react';


const MobxPracScreen = () => {
    //access store using useContext for react components.
    const { userInfo, updateUser, addSubject } = useContext(UserStoreContext);
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Users(Mobx)</Text>
            <Text style={styles.text}>{userInfo.name}-{userInfo.id}</Text>
            <Button title="Update Name" onPress={() => { updateUser('Logic'); }} />
            {userInfo.subject.map((item, index) =>
                <Text style={styles.text} key={index}>{item}</Text>
            )}
            <Button title="Add Subject" onPress={() => { addSubject('DSA'); }} />
        </View>
    );
};
export default observer(MobxPracScreen);


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 16,
        color: 'black',
    },
});
