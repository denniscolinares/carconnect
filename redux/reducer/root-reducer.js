"use strict";

import { combineReducers } from '@reduxjs/toolkit';
import * as modalReducer from "@/redux/reducer/modal";

let reducers = {
	modal: modalReducer,
};

export default combineReducers(reducers);
