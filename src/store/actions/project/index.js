import { LIST_PROJECT, ADD_PROJECT, UPLOAD_IMAGE } from "./types";
import api from "../../api";
import { ALERT_SHOW } from "../alert/types";

export const listProjects = () => {
  return dispatch => {
    return api
      .get(`http://localhost:5000/project`)
      .then(response => {
        dispatch({ type: LIST_PROJECT, payload: response.data });
      })
      .catch(error => {
        throw error;
      });
  };
};

export const addProject = data => {
  return dispatch => {
    return api
      .post(`http://localhost:5000/project/addproject`, data)
      .then(response => {
        dispatch({ type: ADD_PROJECT, payload: response.data });
        dispatch({
          type: ALERT_SHOW,
          payload: {
            type: "success",
            message: "Success",
            content: "the project has added with success"
          }
        });
      })
      .catch(() => {
        dispatch({
          type: ALERT_SHOW,
          payload: {
            type: "error",
            message: "Erreur",
            content: "the project doesn't added"
          }
        });
      });
  };
};
export const uploadImage = data => {
  const formData = new FormData();
  formData.append("files", data);
  return dispatch => {
    return api
      .post(`http://localhost:5000/upload/multiple`, formData)
      .then(response => {
        dispatch({ type: UPLOAD_IMAGE, payload: response.data[0].file.path });
      })
      .catch(error => {
        throw error;
      });
  };
};
