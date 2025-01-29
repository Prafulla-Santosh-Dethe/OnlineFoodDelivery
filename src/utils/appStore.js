import { configureStore } from "@reduxjs/toolkit"
import cartReducer from "./cartSlice"

const appStore = configureStore({
    // big reducer which contain small small multiple slices of reducers
    reducer : {
       cart : cartReducer,

    }
});
export default appStore;