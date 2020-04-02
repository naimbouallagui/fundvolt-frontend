import axios from 'axios';
import { ADD_CLIENT } from './types';

export const registerClient = (data) => {
  return (dispatch) => {
    return axios.post(`http://localhost:5000/client/addclient`, data)
      .then(response => {
        dispatch({type: ADD_CLIENT, payload: response.data});
      })
      .catch(error => {
        throw(error);
      });
  };
};
