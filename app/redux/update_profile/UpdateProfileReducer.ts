/* eslint-disable prettier/prettier */
import { createReducer } from '@reduxjs/toolkit';
import { UpdateProfile } from '../../interface';
import { updateUserProfile } from './UpdateProfileActions';

const intialState = { name: '', imgLink: '' } satisfies UpdateProfile as UpdateProfile;

const updateProfileReducer = createReducer(intialState, (builder) => {
    builder.addCase(updateUserProfile, (state, action) => {
        state.name = action.payload.username;
        state.imgLink = action.payload.image;
    });
});

export default updateProfileReducer;