import UserReducer from "./userReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    post:UserReducer
})

export default rootReducer;