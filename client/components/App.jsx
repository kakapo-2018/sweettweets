import React from "react";
import { connect } from "react-redux";

import Navbar from "./Navbar";
import ErrorMessage from "./ErrorMessage";
import Links from "./Links";
import Loading from "./Loading";
import LoginForm from "./LoginForm";
import Logout from "./Logout";
import RegisterForm from "./RegisterForm";
import Tweets from "./Tweets";

import { requestLogin, receiveLogin, loginError } from "../actions/login";
import { requestLogout, receiveLogout } from "../actions/logout";
import {
  requestRegister,
  registerError,
  registerUser
} from "../actions/register";
import AddTweet from "./AddTweet";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showRegister: false,
      showLogin: false,
      showTweets: true
    };
    this.loginClick = this.loginClick.bind(this);
    this.registerClick = this.registerClick.bind(this);
  }

  loginClick() {
    console.log("clicked");
    if (!this.state.showLogin) {
      return this.setState({ showLogin: true, showRegister: false });
    } else {
      return this.setState({ showLogin: false, showRegister: false });
    }
  }

  registerClick() {
    console.log("clickedreg");
    if (!this.state.showRegister) {
      return this.setState({ showRegister: true, showLogin: false });
    } else {
      return this.setState({ showLogin: false, showRegister: false });
    }
  }

  render() {
    return (
      <div>
        <h1>Sweet Tweets</h1>
        <Navbar
          loginClick={this.loginClick}
          registerClick={this.registerClick}
        />
        {this.state.showLogin && <LoginForm />}
        <AddTweet />
        {this.state.showRegister && <RegisterForm />}
        {this.state.showTweets && <Tweets />}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth
  };
};

export default connect(mapStateToProps)(App);
