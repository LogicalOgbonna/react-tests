import { createStore, applyMiddleware } from 'redux';
import thunk from "redux-thunk";
import rootReducer from "./reducers";

const middlewares = [thunk];

export const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore)
export const store = createStoreWithMiddleware(rootReducer);