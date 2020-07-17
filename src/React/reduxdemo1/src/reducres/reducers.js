import React from 'react';
import {combineReducers} from "redux";

const counter = (state = {count : 0}, action) => {
    switch(action.type){
        case "ADD":
            return state = {count : state.count + 1};
        case "SUB":
            return  state = {count : state.count - 1};
        default:
            return state
    }
};

export default combineReducers({counter:counter});
