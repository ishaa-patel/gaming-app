/* eslint-disable prettier/prettier */
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getApi = createAsyncThunk('getApi',
    async () => {
        try {
            const { data } = await axios.get('https://pokeapi.co/api/v2/pokemon');
            // console.log(data);
            return data;
        }
        catch (err) {
            console.log('Error in Api request:', err);
        }
    }
);
