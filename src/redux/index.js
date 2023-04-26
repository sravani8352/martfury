import { configureStore } from "@reduxjs/toolkit";
import BestSellers from "./slice/bestsellersSlice";
import Computers from "./slice/computerSlice";
import cartSlice from "./slice/cartSlice";


const Store = configureStore({

    reducer:{
        Bestseller: BestSellers.reducer,
        Computer: Computers.reducer,
        Cart:cartSlice.reducer,

    }
});

export default Store;