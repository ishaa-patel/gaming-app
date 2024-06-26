/* eslint-disable prettier/prettier */
import { createAction } from '@reduxjs/toolkit';

export const updateUserProfile = createAction('updateUserProfile', function prepare(image: string, username: string) {
    return {
        payload: {
            image,
            username,
        },
    };
});


