import React from "react";
import { connect } from "react-redux";

import { registerUser, registerError } from "../actions/register";
import ErrorMessage from "./ErrorMessage";

class RegisterForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user_name: "",
      password: "",
      confirm: "",
      cohort: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(e) {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value
    });
  }

  handleClick(event) {
    this.props.toggleRegister();
    const { user_name, password, confirm, cohort } = this.state;
    if (password !== confirm) {
      this.props.registerError("Passwords do not match!");
      return;
    }
    const creds = {
      user_name: user_name.trim(),
      password: password.trim(),
      cohort: cohort.trim()
    };
    this.props.registerUser(creds);
  }

  render() {
    const { user_name, password, confirm } = this.state;
    return (
      <div>
        <p>
          <input
            name="user_name"
            placeholder="Username"
            onChange={this.handleChange}
            value={user_name}
          />
        </p>

        <p>
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={this.handleChange}
            value={password}
          />
        </p>

        <p>
          <input
            type="password"
            name="confirm"
            placeholder="Confirm"
            onChange={this.handleChange}
            value={confirm}
          />
        </p>

        <select name='cohort' onChange={this.handleChange}>
          <option value='0'>Pick your cohort </option>
          <option value='1'>kakapo </option>
          <option value='2'>ruru </option>
          <option value='3'>Pohutukawa </option>
        </select>

        <button onClick={this.handleClick}>Register</button>

        <ErrorMessage reducer="auth" />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    registerUser: creds => {
      return dispatch(registerUser(creds));
    },
    registerError: message => {
      dispatch(registerError(message));
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(RegisterForm);
