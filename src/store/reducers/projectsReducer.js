import { LIST_PROJECT } from '../actions/project/typesProject';

const ProjectsReducer = (stateProject = [], action) => {
  switch (action.type) {
    case LIST_PROJECT:
        return action.payload;
      default:
      return stateProject;
  }
};

export default ProjectsReducer;

