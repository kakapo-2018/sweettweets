import React from "react";

import { connect } from "react-redux";

import Navbar from "./Navbar";
// import ErrorMessage from "./ErrorMessage"
// import Links from "./Links"
// import Loading from "./Loading"
import LoginForm from "./LoginForm";
// import Logout from "./Logout"
import RegisterForm from "./RegisterForm";
import TweetList from "./TweetList";
import AddTweet from "./AddTweet";
import { getTweet } from "./../actions/tweet";
import ProfileForm from "./ProfileForm";
// import { requestLogin, receiveLogin, loginError } from "../actions/login"
// import { requestLogout, receiveLogout } from "../actions/logout"
// import { requestRegister, registerError, registerUser } from "../actions/register"

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showRegister: false,
      showLogin: false,
      showTweets: true,
      showProfile: false
    };
    this.loginClick = this.loginClick.bind(this);
    this.registerClick = this.registerClick.bind(this);
    this.profileClick = this.profileClick.bind(this);
  }

  componentDidMount() {
    this.props.getTweet();
  }

  profileClick() {
    console.log('clicked')
    if (!this.state.showProfile && !this.state.showLogin) {
      return this.setState({ showProfile: true });
    } else {
      return this.setState({ showProfile: false });
    }
  }

  loginClick() {
    // console.log('clicked')
    if (!this.state.showLogin) {
      return this.setState({ showLogin: true, showRegister: false, showProfile: false });
    } else {
      return this.setState({ showLogin: false, showRegister: false, showProfile: false });
    }
  }

  registerClick() {
    // console.log('clickedreg')
    if (!this.state.showRegister) {
      return this.setState({ showRegister: true, showLogin: false, showProfile: false });
    } else {
      return this.setState({ showLogin: false, showRegister: false, showProfile: false });
    }
  }

  render() {
    return (
      <div>
        <h1>Sweet Tweets</h1>
        <Navbar
          loginClick={this.loginClick}
          registerClick={this.registerClick}
          profileClick={this.profileClick}
        />
        {this.state.showLogin && <LoginForm />}
        {this.state.showRegister && <RegisterForm />}
        {this.state.showProfile &&
          this.props.auth.isAuthenticated && <ProfileForm />}
        {this.state.showTweets &&
          this.props.auth.isAuthenticated && <AddTweet />}
        {this.state.showTweets && <TweetList />}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth,
    tweets: state.tweets
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getTweet: () => {
      dispatch(getTweet());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
