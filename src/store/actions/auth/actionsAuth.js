import axios from "axios";
import { LOGIN } from "./typesAuth";

export const authentication = data => {
  return dispatch => {
    return axios
      .post(`http://localhost:5000/login`, data)
      .then(response => {
        if (response.data) {
          dispatch({
            type: LOGIN,
            payload: { error: false, data: response.data }
          });
          localStorage.setItem("tokenFund", response.data.access_token);
        }
      })
      .catch(error => {
        dispatch({ type: LOGIN, payload: { error: true, data: error } });
      });
  };
};
