/* eslint-disable react/react-in-jsx-scope *//* eslint-disable prettier/prettier */
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import constants from '../constants/AppConstants';
import { LoginScreen, OnBoardingScreen, RegisterScreen } from '../screens';
const Stack = createNativeStackNavigator();
const AuthStack = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name={constants.NAV_MAIN} component={OnBoardingScreen} />
            <Stack.Screen name={constants.NAV_LOGIN} component={LoginScreen} />
            <Stack.Screen name={constants.NAV_REGISTER} component={RegisterScreen} />
        </Stack.Navigator>
    );
}
export default AuthStack;
