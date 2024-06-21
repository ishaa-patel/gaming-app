/* eslint-disable react/react-in-jsx-scope *//* eslint-disable prettier/prettier */
import { Text, View, TouchableOpacity, ImageBackground, Image } from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { styles } from './styles/CustomDrawerStyle';
import Ionicons from 'react-native-vector-icons/Ionicons';
import images from '../assets/images';
import { useNavigation } from '@react-navigation/native';
import constants from '../constants/AppConstants';
import { AuthContext } from '../providers/AuthContextProvider';
import { useContext } from 'react';

const CustomDrawer = (props) => {
    const navigation = useNavigation();
    const { logout } = useContext(AuthContext);
    return (
        <View style={styles.container}>
            <DrawerContentScrollView {...props} contentContainerStyle={styles.contentContainer}>
                <ImageBackground source={images.bgImg} style={{ padding: 20 }}>
                    <Image source={images.userImg} style={styles.userimg} />
                    <View style={styles.userdetail}>
                        <Text style={styles.username}>User Name</Text>
                        <TouchableOpacity onPress={() => navigation.navigate(constants.NAV_HOME)}>
                            <Text style={styles.updateprofile}>
                                <Ionicons name="cloud-upload" size={15} />Update Profile
                            </Text>
                        </TouchableOpacity>
                    </View>
                </ImageBackground >
                <View style={styles.drawerlist}>
                    <DrawerItemList {...props} />
                </View>
            </DrawerContentScrollView>
            <View style={styles.separator}>
                <TouchableOpacity style={styles.footer}
                    onPress={() => {
                        logout();
                    }}>
                    <Ionicons name="exit-outline" color="black" size={22} />
                    <Text style={styles.signout}>Sign Out</Text>
                </TouchableOpacity>
            </View>
        </View >
    );
};
export default CustomDrawer;
