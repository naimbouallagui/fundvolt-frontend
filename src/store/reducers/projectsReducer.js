import { LIST_PROJECT, ADD_PROJECT } from "../actions/project/types";

const ProjectsReducer = (stateProject = [], action) => {
  switch (action.type) {
    case LIST_PROJECT:
      return action.payload;
    case ADD_PROJECT:
      const data = action.payload;
      return [...stateProject, data];
    default:
      return stateProject;
  }
};

export default ProjectsReducer;
