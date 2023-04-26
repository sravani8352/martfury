import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import {v4 as uuid} from "uuid";


const BestSellers = createSlice({

    name: "Bestseller",
    initialState: {
        items: [],
        status: "pending",
        error: null
    },
    reducers: {},
    extraReducers: builder => builder
        .addCase(fetchSellerData.pending, (state, action) => {
            state.status = "pending";
        })
        .addCase(fetchSellerData.rejected, (state, action) => {
            state.status = "rejected";
            state.error = action.error;
        })
        .addCase(fetchSellerData.fulfilled, (state, action) => {
            state.status = "fulfilled";
            state.items = action.payload;
        })
});


export const fetchSellerData = createAsyncThunk("Bestseller/fetch", async() => {
    try{
        const {data} = await axios.get("https://res.cloudinary.com/dwdy4lewd/raw/upload/v1668789882/React%20Class/M.%20Revanth/bestSellers_hzg6to.json");
        return data.map(e=> ({...e,id:uuid()}));
    }
    catch (error){
        return error.message;
    }
});

export default BestSellers;