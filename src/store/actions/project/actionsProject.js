import axios from 'axios';
import { LIST_PROJECT } from './typesProject';

export const listProjects = () => {
  
    return dispatch => {
      return axios
        .get(`http://localhost:5000/project`)
        .then(response => {
          dispatch({ type: LIST_PROJECT, payload: response.data });
        })
        .catch(error => {
          throw error;
        });
    };
  };