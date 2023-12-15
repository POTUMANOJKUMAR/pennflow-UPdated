import { combineReducers } from "@reduxjs/toolkit";
import authSlice from "./authSlice";

const reducers = combineReducers({
    auth: authSlice
});

export default reducers;