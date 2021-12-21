import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from "redux-logger";
import { appReducer, mainReducer } from "../Reducer";

const reducers = combineReducers({ appReducer, mainReducer });
const loggerMiddleware = applyMiddleware(logger);
const store = createStore(reducers, loggerMiddleware);

export default store;
