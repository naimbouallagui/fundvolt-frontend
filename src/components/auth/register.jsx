import React, { useReducer, useState } from "react";
import { connect } from "react-redux";
import InvestorReducer from "../../store/reducers/investorReducer";
import { registerClient } from "../../store/actions/actionsClient";


const Register = (props) => {
  const [dispatchInv] = useReducer(InvestorReducer);
  // const alert = useAlert()
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    role: "client",
    status: "connected",
    // company: "x",
    address: "",
    phone: ""
  });
  const fieldChangedHandler = ({ target }) => {
    setUser({
      ...user,
      [target.name]: target.value
    });
  };
  const submit = async e => {
    e.preventDefault();
    console.log(user);
    if(user.role === 'client') {
      props.addClient(user);
    }
    else{
      dispatchInv({
          type: "ADD_INVESTOR",
          payload: user
        });
      }
      };
  return (
    <div className="grid_6 prefix_1">
      <div className="form login-form">
        <form>
          <h3 className="rs title-form">Register</h3>
          <div className="box-white">
            <h4 className="rs title-box">New to FundVolt?</h4>
            <p className="rs">A FundVolt account is required to continue.</p>
            <div className="form-action">
              <label htmlFor="txt_name">
                <input
                  onChange={fieldChangedHandler}
                  name="email"
                  className="txt fill-width"
                  type="email"
                  placeholder="Enter your email"
                />
              </label>
              <div className="wrap-2col clearfix">
                <div className="col">
                  <label htmlFor="txt_email">
                    <input
                      onChange={fieldChangedHandler}
                      name="username"
                      className="txt fill-width"
                      type="text"
                      placeholder="Enter your full name"
                    />
                  </label>
                </div>
                <div className="col">
                  <label htmlFor="txt_re_email">
                    <input
                      onChange={fieldChangedHandler}
                      name="password"
                      className="txt fill-width"
                      type="password"
                      placeholder="Enter your password"
                    />
                  </label>
                </div>
              </div>
              <div className="wrap-2col clearfix">
                <div className="col">
                  <label htmlFor="txt_email">
                    <input
                      onChange={fieldChangedHandler}
                      name="address"
                      className="txt fill-width"
                      type="text"
                      placeholder="Enter your address"
                    />
                  </label>
                </div>
                <div className="col">
                  <label htmlFor="txt_password">
                    <input
                      onChange={fieldChangedHandler}
                      name="phone"
                      className="txt fill-width"
                      type="text"
                      placeholder="Enter phone number"
                    />
                  </label>
                </div>
              </div>
              <label className="rs pb20 clearfix">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-evenly",
                    alignItems: "baseline"
                  }}
                >
                  <span className="lbl-remember">You are a</span>
                  <div>
                    <input
                      name="role"
                      value="investor"
                      type="radio"
                      className="chk-remember"
                      style={{ marginTop: 5 }}
                      onChange={fieldChangedHandler}
                    />
                    <span>investor</span>
                  </div>
                  <div>
                    <input
                      name="role"
                      value="client"
                      type="radio"
                      checked
                      className="chk-remember"
                      style={{ marginTop: 5 }}
                      onChange={fieldChangedHandler}
                    />
                    <span>client</span>
                  </div>
                </div>
              </label>
              <p className="rs pb10" style={{display:'none'}}>
                By signing up, you agree to our
                <a href="#tttt" className="fc-orange">
                  terms of use
                </a>
                and
                <a href="#ttt" className="fc-orange">
                  privacy policy
                </a>
                .
              </p>
              <p className="rs ta-c">
                <button
                  className="btn btn-red btn-submit"
                  type="submit"
                  onClick={submit}
                >
                  Register
                </button>
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
function mapDispatchToProps(dispatch) {
  return {
    addClient: client => {dispatch(registerClient(client));}
  };
}
export default connect(null,mapDispatchToProps)(Register);
