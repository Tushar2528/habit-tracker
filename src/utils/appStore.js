import { configureStore } from "@reduxjs/toolkit";
import habitSlice from "./habitSlice";

const appStore = configureStore({
    reducer : {
        habit : habitSlice
    }
})

export default appStore;