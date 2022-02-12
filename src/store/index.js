import {applyMiddleware, combineReducers, createStore} from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import countries from "./countries/reduser";

const rootReducer = combineReducers({
   countries,
});

export default createStore(rootReducer, applyMiddleware(thunk));
