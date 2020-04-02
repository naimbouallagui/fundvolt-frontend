import React from 'react'
import Menu from './menu'
import Register from '../auth/register'
import Login from '../auth/login'
import { connect } from 'react-redux'
import { LOGOUT } from '../../store/actions/auth/typesAuth'

function Nav(props) {
  
    const isLogged=props.auth?true:false
    const isInvestor=props.auth && props.auth.type==="investor"

    return (
        <header id="header">
        <Menu isLogged={isLogged} logout={props.logout} isInvestor={isInvestor}/>
        {!isLogged && <div className="popup-common" id="sys_popup_common">
          <div className="overlay-bl-bg"></div>
          <div className="container_12 pop-content">
            <div className="grid_12 wrap-btn-close ta-r">
              <i className="icon iBigX closePopup"></i>
            </div>
           <Register/>
           <Login/>
           <div className="clear"></div>
          </div>
        </div>}
      </header>
   
    )
}
const mapStateToProps=(state)=>({
  auth:state.authentication
})
const mapDispatchToProps=(dispatch)=>({
  logout:()=>dispatch({type:LOGOUT})
})
export default connect(mapStateToProps,mapDispatchToProps)(Nav)
