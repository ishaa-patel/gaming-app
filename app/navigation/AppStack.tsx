/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react/react-in-jsx-scope *//* eslint-disable prettier/prettier */
import { createDrawerNavigator } from '@react-navigation/drawer';
import constants from '../constants/AppConstants';
import { HomeScreen, MessageScreen, MomentsScreen, ProfileScreen, SettingScreen } from '../screens';
import { CustomDrawer } from '../components';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Drawer = createDrawerNavigator();

const AppStack = () => {
    return (
        <Drawer.Navigator
            screenOptions={{
                headerShown: false,
                headerLeftLabelVisible: true,
                drawerActiveBackgroundColor: '#ae0061',
                drawerActiveTintColor: '#fff',
                drawerInactiveTintColor: '#333',
                drawerLabelStyle: { marginLeft: -20, fontSize: 15 },
            }}
            drawerContent={props => <CustomDrawer {...props} />}
        >
            <Drawer.Screen name={constants.NAV_HOME}
                component={HomeScreen}
                options={{
                    drawerIcon: ({ color }) => (
                        <Ionicons name="home-outline" color={color} size={26} />
                    ),
                }} />
            <Drawer.Screen name={constants.NAV_PROFILE}
                component={ProfileScreen}
                options={{
                    drawerIcon: ({ color }) => (
                        <Ionicons name="person-outline" color={color} size={26} />
                    ),
                }} />
            <Drawer.Screen name={constants.NAV_MESSAGE}
                component={MessageScreen}
                options={{
                    drawerIcon: ({ color }) => (
                        <Ionicons name="chatbox-ellipses-outline" color={color} size={26} />
                    ),
                }} />
            <Drawer.Screen name={constants.NAV_MOMENTS}
                component={MomentsScreen}
                options={{
                    drawerIcon: ({ color }) => (
                        <Ionicons name="timer-outline" color={color} size={26} />
                    ),
                }}
            />
            <Drawer.Screen name={constants.NAV_SETTING}
                component={SettingScreen}
                options={{
                    drawerIcon: ({ color }) => (
                        <Ionicons name="settings-outline" color={color} size={26} />
                    ),
                }}
            />
        </Drawer.Navigator>
    );
};
export default AppStack;
