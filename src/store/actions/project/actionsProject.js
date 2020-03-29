import axios from 'axios';
import { LIST_PROJECT, ADD_PROJECT } from './typesProject';

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

  
export const addProject = (data) => {
  return (dispatch) => {
    return axios.post(`http://localhost:5000/project/addproject`, data)
      .then(response => {
        dispatch({type: ADD_PROJECT, payload: response.data});
      })
      .catch(error => {
        throw(error);
      });
  };
};