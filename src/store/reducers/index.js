import { combineReducers } from "redux";
import ClientReducer from "./clientReducer";
import InvestorReducer from "./investorReducer";
import AuthenticationReducer from "./authenticationReducer";
import ProjectsReducer from "./projectsReducer";

const rootReducer = combineReducers({
  clients:ClientReducer,
  investors:InvestorReducer,
  authentication: AuthenticationReducer,
  projects: ProjectsReducer

})
export default rootReducer