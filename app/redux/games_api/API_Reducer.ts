/* eslint-disable prettier/prettier */
import { createSlice } from '@reduxjs/toolkit';
import { getApi } from './API_Actions';
const initState = {
    data: [],
};

export const APISlice = createSlice({
    name: 'gamesAPI',
    initialState: initState,
    reducers: {
    },
    extraReducers: builder => {
        builder.addCase(getApi.fulfilled, (state, action) => {
            state.data = action.payload;
        })
    },
});


export default APISlice.reducer;
