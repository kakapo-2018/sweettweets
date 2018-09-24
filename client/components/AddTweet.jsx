import React from "react";
import { connect } from "react-redux";
import { saveTweet } from "../actions/tweet";

class AddTweet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tweet: ""
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

  handleClick() {
    this.props.saveTweet(this.state.tweet, this.props.state.auth.user.id);
  }
  render() {
    console.log(this.props.tweet);
    console.log(this.state);

    return (
      <div
        data-aos="fade-up-left
        "
        data-aos-offset="200"
        data-aos-delay="400"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="true"
        data-aos-anchor-placement="top-center"
        id="addTweet"
        className="container"
      >
        <h3>{this.props.tweets.length > 1 && "Tweet Saved!"}</h3>
        <img id="bird" width="150px" src="/bird.png" />
        <h2>Add your tweet here:</h2>
        <p>
          <textarea
            maxLength="200"
            id="tweetInput"
            className="form-control"
            type="text"
            name="tweet"
            placeholder="Tweet of advice goes here.."
            onChange={this.handleChange}
            value={this.state.tweet}
          />
        </p>
        <button className="btn btn-primary" onClick={this.handleClick}>
          Save Tweet
        </button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    state: state,
    tweets: state.tweets
  };
}

function mapDispatchToProps(dispatch) {
  return {
    saveTweet: (tweet, id) => {
      dispatch(saveTweet(tweet, id));
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddTweet);
