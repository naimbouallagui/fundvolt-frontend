import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { authentication } from "../../store/actions/auth/actionsAuth";
import { Redirect } from "react-router-dom";

const Login = ({ login, loginResponse }) => {
  const [user, setUser] = useState({
    username: "",
    password: ""
  });

  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setError(loginResponse ? loginResponse.error : false);
    setLoading(false);
  }, [loginResponse]);

  const fieldChangedHandler = ({ target }) => {
    setUser({
      ...user,
      [target.name]: target.value
    });
  };
  const submit = event => {
    event.preventDefault();
    setLoading(true);
    login(user);
  };
  // if (loginResponse && loginResponse.error === false)
  //   return <Redirect to="/home" />;
  return (
    <>
      <div className="grid_4">
        <div className="form login-form">
          <form onSubmit={submit}>
            <h3 className="rs title-form">Login</h3>
            <div className="box-white">
              <h4 className="rs title-box">Already Have an Account?</h4>
              <p className="rs">Please log in to continue.</p>
              <div className="form-action">
                <label htmlFor="txt_email_login">
                  <input
                    onChange={fieldChangedHandler}
                    name="username"
                    className="txt fill-width"
                    type="username"
                    placeholder="Enter your e-mail address"
                  />
                </label>
                <label htmlFor="txt_password_login">
                  <input
                    onChange={fieldChangedHandler}
                    name="password"
                    className="txt fill-width"
                    type="password"
                    placeholder="Enter password"
                  />
                </label>

                <label htmlFor="chk_remember" className="rs pb20 clearfix">
                  <input
                    id="chk_remember"
                    type="checkbox"
                    className="chk-remember"
                  />
                  <span className="lbl-remember">Remember me</span>
                </label>
                <p className="small rs ta-c" style={{ color: "red" }}>
                  {error && "Username or password invalid"}
                </p>
                <div className="rs ta-c">
                  <button
                    className="btn btn-blue"
                    type="submit"
                    disabled={loading}
                  >
                    Login
                    {loading && (
                      <span
                        className="spinner-border spinner-border-sm"
                        role="status"
                        aria-hidden="true"
                      ></span>
                    )}
                  </button>
                </div>
                <p className="rs ta-c">
                  <a href="#rrrr" className="fc-orange">
                    I forgot my password
                  </a>
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

const mapStateToPtops = state => ({
  loginResponse: state.authentication
});
const mapDispatchToProps = dispatch => {
  return {
    login: user => {
      dispatch(authentication(user));
    }
  };
};
export default connect(mapStateToPtops, mapDispatchToProps)(Login);
