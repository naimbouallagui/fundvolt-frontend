import { ADD_CLIENT} from '../actions/client/types';

const ClientReducer = (stateClient = [], action) => {
  switch (action.type) {
    case ADD_CLIENT:
      const data = action.payload;
        return [...stateClient, data] ;
      default:
      return stateClient;
  }
};

export default ClientReducer;
