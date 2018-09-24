import React from "react";
import { connect } from "react-redux";

import { logoutUser } from "../actions/logout";

const Logout = props => {
  return (
    <button id="logout" class="btn btn-success" onClick={props.logoutUser}>
      <i class="fas fa-sign-out-alt" /> Logout
    </button>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    logoutUser: () => {
      dispatch(logoutUser());
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Logout);
