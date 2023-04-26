import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


const Computers = createSlice({

    name: "Computer",
    initialState: {
        value: [],
        status: "pending",
        error: null
    },
    reducers: {},
    extraReducers: builder => builder
        .addCase(fetchData.pending, (state, action) => {
            state.status = "pending";
        })
        .addCase(fetchData.rejected, (state, action) => {
            state.status = "rejected";
            state.error = action.error;
        })
        .addCase(fetchData.fulfilled, (state, action) => {
            state.status = "fulfilled";
            state.value = action.payload;
        })
});


export const fetchData = createAsyncThunk("Computer/fetch", async() => {
    try{
        const {data} = await axios.get("https://res.cloudinary.com/dwdy4lewd/raw/upload/v1668789882/React%20Class/M.%20Revanth/ComputerAndTechnology_lyzzy9.json");
        return data;
    }
    catch (error){
        return error.message;
    }
});

export default Computers;