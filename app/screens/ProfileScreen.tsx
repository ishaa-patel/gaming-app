/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/react-in-jsx-scope *//* eslint-disable prettier/prettier */

import {
    View,
    Text,
    TextInput,
    Image,
    TouchableWithoutFeedback,
    TouchableOpacity,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useState } from 'react';
import DocumentPicker from 'react-native-document-picker';
import { styles } from './styles/ProfileScreenStyle';
import { CustomButton } from '../components';
import images from '../assets/images';
import { connect } from 'react-redux';
import { updateUserProfile } from '../redux/update_profile/UpdateProfileActions';
import constants from '../constants/AppConstants';

const ProfileScreen = (props) => {
    const [img, setImg] = useState();
    const [updatedName, setUpdatedName] = useState('');
    const selectImg = async () => {
        try {
            const doc = await DocumentPicker.pickSingle({
                type: [DocumentPicker.types.images],
            });
            //console.log('Document picker:', doc);
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
            <TouchableWithoutFeedback onPress={selectImg}>
                {img ?
                    <Image style={styles.img} source={{ uri: img }} /> :
                    <View>
                        <Image style={styles.img} source={images.updateProfileImg} />
                        <MaterialIcons name="add" size={22} style={styles.addImgLogo} />
                    </View>
                }
            </TouchableWithoutFeedback>
            <View style={styles.inputField} >
                <MaterialIcons name="person" style={{ color: 'gray', margin: 5 }} size={20} />
                <TextInput
                    style={styles.input}
                    placeholder="Name"
                    placeholderTextColor={'gray'}
                    value={updatedName}
                    onChangeText={txt => setUpdatedName(txt)}
                />
            </View>
            <CustomButton label={'Save'} onPress={() => {
                props.setUserProfile(img, updatedName);
            }}
            />
            <TouchableOpacity onPress={() => { props.navigation.navigate(constants.NAV_HOME); }}>
                <Text style={styles.cancelBtn}>Cancel</Text>
            </TouchableOpacity>
        </View>
    );
};

export const mapStateToProps = (state: any) => {
    return {
        currentProfileName: state.profile.name,
        currentProfileImg: state.profile.imgLink,
    };
};

export const mapDispatchToProps = (dispatch: any) => {
    return {
        setUserProfile: (updateImg: string, updateName: string) =>
            dispatch(updateUserProfile(updateImg, updateName)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileScreen);
