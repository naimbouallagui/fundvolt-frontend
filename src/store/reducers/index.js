import { combineReducers } from "redux";
import ClientReducer from "./clientReducer";

const rootReducer = combineReducers({
  clients:ClientReducer
})
export default rootReducer