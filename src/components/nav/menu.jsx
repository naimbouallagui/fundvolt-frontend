import React from "react";
import { Link, NavLink } from "react-router-dom";

const Menu = ({ isLogged,logout }) => {
  return (
    <>
      <div className="wrap-top-menu">
        <div className="container_12 clearfix">
          <div className="grid_12">
            <nav className="top-menu">
              <ul id="main-menu" className="nav nav-horizontal clearfix">
                <li className="active">
                  <a href="ndex.html">Home</a>
                </li>
                <li className="sep"></li>
                <li>
                  <a href="ll-pages.html">Profile</a>
                </li>
                <li className="sep"></li>
                <li>
                  <a href="ow-it-work.html">Help</a>
                </li>
                <li className="sep"></li>
                <li>
                  <a href="ontact.html">Contact</a>
                </li>
              </ul>
              <a
                id="btn-toogle-menu"
                className="btn-toogle-menu"
                href="alternate-menu"
              >
                <span className="line-bar"></span>
                <span className="line-bar"></span>
                <span className="line-bar"></span>
              </a>
              <div id="right-menu">
                <ul className="alternate-menu">
                  <li>
                    <a href="ndex.html">Home</a>
                  </li>
                  <li>
                    <a href="ll-pages.html">Profile</a>
                  </li>
                  <li>
                    <a href="ow-it-work.html">Help</a>
                  </li>
                  <li>
                    <a href="ontact.html">Contact us</a>
                  </li>
                </ul>
              </div>
            </nav>
            <div className="top-message clearfix">
              <i className="icon iFolder"></i>
              <span className="txt-message">Don't Hesitate To Be With Us</span>
              <i className="icon iX"></i>
              <div className="clear"></div>
            </div>
            <i
              id="sys_btn_toggle_search"
              className="icon iBtnRed make-right"
            ></i>
          </div>
        </div>
      </div>
      <div className="container_12 clearfix">
        <div className="grid_12 header-content">
          <div id="sys_header_right" className="header-right">
            <div className="account-panel">
              {isLogged ? (
                <Link
                  to="/home"
                  onClick={logout}
                  className="btn btn-black"
                >
                  Logout
                </Link>
              ) : (
                [
                  <button
                    key="registerBtn"
                    className="btn btn-red sys_show_popup_login"
                  >
                    Register
                  </button>,
                  <a
                    key="loginBtn"
                    href="#zdfzedfez"
                    className="btn btn-black sys_show_popup_login"
                  >
                    Login
                  </a>
                ]
              )}
            </div>
            <div className="form-search">
              <form action="#">
                <label htmlFor="sys_txt_keyword">
                  <input
                    id="sys_txt_keyword"
                    className="txt-keyword"
                    type="text"
                    placeholder="Search projects"
                  />
                </label>
                <button className="btn-search" type="reset">
                  <i className="icon iMagnifier"></i>
                </button>
                <button className="btn-reset-keyword" type="reset">
                  <i className="icon iXHover"></i>
                </button>
              </form>
            </div>
          </div>
          <div className="header-left">
            <h1 id="logo">
              <Link to="/home">
                <img src="./assets/images/logo.png" alt="$SITE_NAME" />
              </Link>
            </h1>
            <div className="main-nav clearfix">
              <div className="nav-item">
                <a href="ategory.html" className="nav-title">
                  Discover
                </a>
                <p className="rs nav-description">Great Projects</p>
              </div>
              <span className="sep"></span>
              <div className="nav-item">
                <NavLink to="/home/addproject" className="nav-title" exact activeClassName='active'>
                  Start
                </NavLink>
                <p className="rs nav-description">Your Project</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Menu;
