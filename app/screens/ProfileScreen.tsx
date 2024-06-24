/* eslint-disable react/react-in-jsx-scope *//* eslint-disable prettier/prettier */
import { View, Text, TextInput, Image, Alert, TouchableWithoutFeedback } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useState } from 'react';
import DocumentPicker from 'react-native-document-picker';
import { styles } from './styles/ProfileScreenStyle';
import { CustomButton } from '../components';
import images from '../assets/images';
const ProfileScreen = () => {
    const [img, setImg] = useState();
    const [updatedName, setUpdatedName] = useState('');
    const selectImg = async () => {
        try {
            const doc = await DocumentPicker.pickSingle({
                type: [DocumentPicker.types.images],
            });
            console.log('Document picker:', doc);
            if (doc.name && doc.type?.substring(0, 5) === 'image') {
                setImg(doc?.uri);
            }
            else {
                setImg(null);
            }
        }
        catch (err) {
            if (DocumentPicker.isCancel(err)) {
                console.log('user cancel upload:', err);
            }
            else {
                console.log(err);
            }
        }
    };
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Update Profile</Text>
            <TouchableWithoutFeedback style={styles.imgContainer} onPress={selectImg}>
                {img ?
                    <Image style={styles.img} source={{ uri: img }} /> :
                    <Image style={styles.img} source={images.updateProfileImg} />
                }
            </TouchableWithoutFeedback>
            <View style={styles.inputField} >
                <MaterialIcons name='person' style={{ color: 'gray', margin: 5 }} size={20} />
                <TextInput
                    style={styles.input}
                    placeholder="Name"
                    placeholderTextColor={'gray'}
                    value={updatedName}
                    onChangeText={txt => setUpdatedName(txt)}
                />
            </View>
            <CustomButton label={'Save'} onPress={() => { Alert.alert("Profile Updated Successfully!", updatedName) }} />
        </View>
    );
};
export default ProfileScreen;
