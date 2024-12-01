import { configureStore } from "@reduxjs/toolkit";
import cardReducer from '../Utils/ImportantNewsSlice'

export const appStore = configureStore({
    reducer:{
        important: cardReducer,
    },
})