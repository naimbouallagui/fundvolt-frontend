import { ADD_INVESTOR } from "../actions/investor/types";

const InvestorReducer = (stateInvestor = [], action) => {
  switch (action.type) {
    case ADD_INVESTOR:
      const data = action.payload;
        return  [...stateInvestor, data] ;
      default:
      return stateInvestor;
  }
};

export default InvestorReducer;
