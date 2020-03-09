import axios from "axios";

const initialState = {
  clients: []
};
const ClientReducer = async (state = initialState, action) => {
  switch (action.type) {
    case "ADD_CLIENT":
      const data = action.payload;
      let res = null;
      await axios
        .post(`http://localhost:5000/user/addclient`, data)
        .then(response => {
          res = response.data;
        })
        .catch(error => {
          alert('erreur d insciption')
          console.log(error);
        });
        
      return { clients: [...state.clients, res] } ;

    default:
      return state;
  }
};

export default ClientReducer;
