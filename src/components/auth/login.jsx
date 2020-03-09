import React from 'react'

const Login = () => {
    return (
        <div className="grid_4">
        <div className="form login-form">
          <form action="#rrr">
            <h3 className="rs title-form">Login</h3>
            <div className="box-white">
              <h4 className="rs title-box">Already Have an Account?</h4>
              <p className="rs">Please log in to continue.</p>
              <div className="form-action">
                <label htmlFor="txt_email_login">
                  <input
                    id="txt_email_login"
                    className="txt fill-width"
                    type="email"
                    placeholder="Enter your e-mail address"
                  />
                </label>
                <label htmlFor="txt_password_login">
                  <input
                    id="txt_password_login"
                    className="txt fill-width"
                    type="password"
                    placeholder="Enter password"
                  />
                </label>

                <label
                  htmlFor="chk_remember"
                  className="rs pb20 clearfix"
                >
                  <input
                    id="chk_remember"
                    type="checkbox"
                    className="chk-remember"
                  />
                  <span className="lbl-remember">Remember me</span>
                </label>
                <p className="rs ta-c pb10">
                  <button
                    className="btn btn-red btn-submit"
                    type="submit"
                  >
                    Login
                  </button>
                </p>
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
    
    )
}

export default Login
