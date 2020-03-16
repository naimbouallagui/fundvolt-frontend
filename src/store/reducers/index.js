import { combineReducers } from "redux";
import ClientReducer from "./clientReducer";
import InvestorReducer from "./investorReducer";

const rootReducer = combineReducers({
  clients:ClientReducer,
  investors:InvestorReducer
})
export default rootReducer