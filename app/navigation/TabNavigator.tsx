/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable prettier/prettier */
import React from 'react';
import { FavouriteScreen, CartScreen, GameDetailScreen, HomeScreen } from '../screens';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import constants from '../constants/AppConstants';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const HomeScreenStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name={constants.TAB_HOME}
                component={HomeScreen}
                options={{ headerShown: false }} />
            <Stack.Screen name={constants.GAME_DETAIL}
                component={GameDetailScreen}
                options={({ route }) => ({ title: route.params?.title })} />
        </Stack.Navigator>
    );
};
const TabNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarShowLabel: false,
                headerShown: false,
                tabBarStyle: { backgroundColor: '#ae0061' },
                tabBarInactiveTintColor: '#fff',
                tabBarActiveTintColor: '#f8e46c',
            }}>
            <Tab.Screen name={constants.TAB_HOME}
                component={HomeScreenStack}
                options={({ route }) => ({
                    tabBarStyle: {
                        display: getTabBarVisible(route),
                        backgroundColor: '#ae0061',
                    },
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="home-outline" color={color} size={size} />
                    ),
                })}
            />
            <Tab.Screen name={constants.NAV_CART}
                component={CartScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="cart" color={color} size={size} />
                    ),
                    tabBarBadge: 3,
                    tabBarBadgeStyle: { backgroundColor: '#f8e46c' },
                }}
            />
            <Tab.Screen name={constants.NAV_FAVOURITE}
                component={FavouriteScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="heart" color={color} size={size} />
                    ),
                }}
            />
        </Tab.Navigator >
    );
};

const getTabBarVisible = (route) => {
    const routeName = getFocusedRouteNameFromRoute(route) ?? 'Feed';
    // console.log('RouteName:', routeName);
    // console.log('Route:', route);
    if (routeName === constants.GAME_DETAIL) {
        return 'none';
    }
    else {
        return 'flex';
    }
};

export default TabNavigator;
