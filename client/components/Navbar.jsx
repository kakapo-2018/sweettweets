import React from 'react'
import {connect} from 'react-redux'
import {Route, withRouter} from 'react-router-dom'

import Links from './Links'
import Logout from './Logout'
import LoginForm from './LoginForm'
import RegisterForm from './RegisterForm'
import { loginUser } from '../actions/login';


const Navbar = ({isAuthenticated, loginClick, registerClick}) => {
  return (
    <nav>
      <div>
        <div>
          {!isAuthenticated && (
            <div>
              <button onClick={loginClick}>Login</button>
              <button onClick={registerClick}>Register</button>
            </div>
              
          )}
             {console.log(registerClick)}
          {isAuthenticated && <Logout />}
              
          <hr />
        </div>
      </div>
    </nav>
  )
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.isAuthenticated
  }
}

export default withRouter(connect(mapStateToProps)(Navbar))


         /*{ <Route exact path='/' render={() => (
                <Links active='Home' />
              )} />
              <Route path='/login' render={() => (
                <div>
                  <Links active='Login' />
                  <LoginForm />
                </div>
              )} />
              <Route path='/register' render={() => (
                <div>
                  <Links active='Register' />
                  <RegisterForm /> }*/