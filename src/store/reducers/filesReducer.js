import {  UPLOAD_IMAGE } from "../actions/project/types";

const FilesReducer = (stateFile = "", action) => {
  switch (action.type) {
    
    case UPLOAD_IMAGE:
      return action.payload;
    default:
      return stateFile;
  }
};

export default FilesReducer;
