import axios from 'axios';
import { ADD_INVESTOR } from './typesInvestor';

export const registerInvestor = (data) => {
  return (dispatch) => {
    return axios.post(`http://localhost:5000/investor/addinvestor`, data)
      .then(response => {
        dispatch({type: ADD_INVESTOR, payload: response.data});
      })
      .catch(error => {
        throw(error);
      });
  };
};
