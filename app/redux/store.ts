/* eslint-disable prettier/prettier */
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../redux/counter/CounterSlice';
import updateProfileReducer from './update_profile/UpdateProfileReducer';

export default configureStore({
    reducer: {
        counter: counterReducer,
        profile: updateProfileReducer,
    },
});
