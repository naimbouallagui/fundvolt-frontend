import { LOGIN, LOGOUT } from "../actions/auth/typesAuth";

const AuthenticationReducer = (stateAuth = null, action) => {
  switch (action.type) {
    case LOGIN:
      const data = action.payload;
      return  data;
    case LOGOUT:
      localStorage.removeItem('tokenFund')
      return  null;
    default:
      return stateAuth;
  }
};

export default AuthenticationReducer;

// Login(res: connected user )
// logout( logged user == null)
