/* eslint-disable prettier/prettier */
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../redux/counter/CounterSlice';
import updateProfileReducer from './update_profile/UpdateProfileReducer';
import APISlice from './games_api/API_Reducer';

export default configureStore({
    reducer: {
        counter: counterReducer,
        profile: updateProfileReducer,
        games: APISlice,
    },
});
