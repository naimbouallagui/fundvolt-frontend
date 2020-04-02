import { ALERT_HIDE, ALERT_SHOW } from "../actions/alert/types";
const INITIAL_STATE={
  type:'',// success | error | warning | info
  message:'',
  content:''
}
const alertReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ALERT_SHOW:
      return action.payload;
    case ALERT_HIDE:
      return action.payload;
    default:
      return state;
  }
};

export default alertReducer;
