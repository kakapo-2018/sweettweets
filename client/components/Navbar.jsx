import React from "react";
import { connect } from "react-redux";
import { Route, withRouter } from "react-router-dom";
import Logout from "./Logout";

const Navbar = ({
  isAuthenticated,
  loginClick,
  registerClick,
  profileClick,
  addClick
}) => {
  return (
    <nav>
      <div>
        <div>
          {!isAuthenticated && (
            <div>
              <button class="btn btn-success" onClick={loginClick}>
                Login
              </button>
              <button class="btn btn-success" onClick={registerClick}>
                Register
              </button>
            </div>
          )}
          {console.log(registerClick)}
          {isAuthenticated && (
            <div>
              <Logout />
              <button
                id="breathe2"
                class="btn btn-success"
                onClick={profileClick}
              >
                <i id="breathe" class="fas fa-user" />
                My profile
              </button>
              <button class="btn btn-success" onClick={addClick}>
                <i id="breathe" class="fas fa-kiwi-bird" /> Add tweet
              </button>
            </div>
          )}
          <hr />
        </div>
      </div>
    </nav>
  );
};

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.isAuthenticated
  };
};

export default withRouter(connect(mapStateToProps)(Navbar));
