import { combineReducers } from "redux";
import ClientReducer from "./clientReducer";
import InvestorReducer from "./investorReducer";
import AuthenticationReducer from "./authenticationReducer";
import ProjectsReducer from "./projectsReducer";
import FilesReducer from "./filesReducer";
import alertReducer from "./alertReducer";

const rootReducer = combineReducers({
  clients:ClientReducer,
  investors:InvestorReducer,
  authentication: AuthenticationReducer,
  projects: ProjectsReducer,
  files: FilesReducer,
  alert: alertReducer,

})
export default rootReducer