import React from "react";
import { connect } from "react-redux";

import Navbar from "./Navbar";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import TweetList from "./TweetList";
import AddTweet from "./AddTweet";
import { getTweet } from "./../actions/tweet";
import ProfileForm from "./ProfileForm";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showRegister: false,
      showLogin: false,
      showTweets: true,
      showProfile: false,
      addTweet: false,
      cohort: 0
    };
    this.loginClick = this.loginClick.bind(this);
    this.toggleLogin = this.toggleLogin.bind(this);
    this.registerClick = this.registerClick.bind(this);
    this.profileClick = this.profileClick.bind(this);
    this.tweetUpdate = this.tweetUpdate.bind(this);
    this.toggleRegister = this.toggleRegister.bind(this);
    this.addClick = this.addClick.bind(this);
    this.toggleCohort = this.toggleCohort.bind(this);
  }

  componentDidMount() {
    this.props.getTweet();
  }

  addClick() {
    this.setState(prevState => ({
      addTweet: !prevState.addTweet
    }));
  }

  profileClick() {
    if (!this.state.showProfile && !this.state.showLogin) {
      return this.setState({ showProfile: true });
    } else {
      return this.setState({ showProfile: false });
    }
  }

  loginClick() {
    if (!this.state.showLogin) {
      return this.setState({
        showLogin: true,
        showRegister: false,
        showProfile: false
      });
    } else {
      return this.setState({
        showLogin: false,
        showRegister: false,
        showProfile: false
      });
    }
  }

  toggleCohort(e) {
    this.setState({
      cohort: e.target.value
    });
  }

  registerClick() {
    if (!this.state.showRegister) {
      return this.setState({
        showRegister: true,
        showLogin: false,
        showProfile: false
      });
    } else {
      return this.setState({
        showLogin: false,
        showRegister: false,
        showProfile: false
      });
    }
  }

  tweetUpdate() {
    this.props.getTweet();
  }

  toggleRegister() {
    this.setState({
      showRegister: false,
      showLogin: false,
      showTweets: true
    });
  }

  toggleLogin() {
    this.setState({
      showRegister: false,
      showLogin: false,
      showTweets: true
    });
  }

  render() {
    return (
      <div id="body2">
        <h1 id="titleHead">
          Sweet Tweets <img src="/images/logo/EDA-logo.png" id="logo" />
        </h1>

        <Navbar
          loginClick={this.loginClick}
          registerClick={this.registerClick}
          profileClick={this.profileClick}
          addClick={this.addClick}
        />
        {this.state.showLogin && <LoginForm toggleLogin={this.toggleLogin} />}
        {this.state.showRegister && (
          <RegisterForm toggleRegister={this.toggleRegister} />
        )}
        {this.state.showProfile &&
          this.props.auth.isAuthenticated && <ProfileForm />}

        {this.state.addTweet &&
          this.props.auth.isAuthenticated && (
            <AddTweet tweetUpdate={this.tweetUpdate} />
          )}
        <select
          id="form"
          class="form-control form-control-sm"
          name="cohort"
          onChange={this.toggleCohort}
        >
          <option value="0">Pick your cohort </option>
          <option value="1">Kakapo </option>
          <option value="2">Ruru </option>
          <option value="3">Pohutukawa </option>
        </select>
        {this.state.showTweets && <TweetList cohort={this.state.cohort} />}
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
