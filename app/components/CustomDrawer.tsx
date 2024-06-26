/* eslint-disable react/react-in-jsx-scope *//* eslint-disable prettier/prettier */
import { Text, View, TouchableOpacity, ImageBackground, Image } from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { styles } from './styles/CustomDrawerStyle';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import images from '../assets/images';
import { useNavigation } from '@react-navigation/native';
import constants from '../constants/AppConstants';
import { AuthContext } from '../providers/AuthContextProvider';
import { useContext } from 'react';
import { connect } from 'react-redux';

const CustomDrawer = (props) => {
    const navigation = useNavigation();
    const { logout } = useContext(AuthContext);
    return (
        <View style={styles.container}>
            <DrawerContentScrollView {...props} contentContainerStyle={styles.contentContainer}>
                <ImageBackground source={images.bgImg} style={{ padding: 20 }}>
                    <Image source={props.displayDrawerImg ? { uri: props.displayDrawerImg } : images.updateProfileImg} style={styles.userimg} />
                    <View style={styles.userdetail}>
                        <Text style={styles.username}>{props.displayDrawerUserName ? props.displayDrawerUserName : "Welcome! User"}</Text>
                        <TouchableOpacity style={{ flexDirection: 'row' }} onPress={() => navigation.navigate(constants.NAV_PROFILE)}>
                            <MaterialIcons name="upload" size={15} />
                            <Text style={styles.updateProfile}>Update Profile</Text>
                        </TouchableOpacity>
                    </View>
                </ImageBackground >
                <View style={styles.drawerlist}>
                    <DrawerItemList {...props} />
                </View>
            </DrawerContentScrollView>
            <View style={styles.separator}>
                <TouchableOpacity style={styles.footer}
                    onPress={() => { logout(); }}>
                    <MaterialIcons name="exit-to-app" color="black" size={22} />
                    <Text style={styles.signout}>Sign Out</Text>
                </TouchableOpacity>
            </View>
        </View >
    );
};

export const mapStateToProps = (state: any) => {
    return {
        displayDrawerImg: state.profile.imgLink,
        displayDrawerUserName: state.profile.name,
    };
};
export default connect(mapStateToProps)(CustomDrawer);
