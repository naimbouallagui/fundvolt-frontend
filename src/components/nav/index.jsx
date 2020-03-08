import React from 'react'
import Menu from './menu'
import Register from '../auth/register'
import Login from '../auth/login'

function Nav() {
    return (
        <header id="header">
        <Menu/>
        <div className="popup-common" id="sys_popup_common">
          <div className="overlay-bl-bg"></div>
          <div className="container_12 pop-content">
            <div className="grid_12 wrap-btn-close ta-r">
              <i className="icon iBigX closePopup"></i>
            </div>
           <Register/>
           <Login/>
           <div className="clear"></div>
          </div>
        </div>
      </header>
   
    )
}

export default Nav
