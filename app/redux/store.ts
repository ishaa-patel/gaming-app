/* eslint-disable prettier/prettier */
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../redux/counter/CounterSlice';

export default configureStore({
    reducer: {
        counter: counterReducer,
    },
});
