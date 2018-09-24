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
    this.props.saveTweet(this.state.tweet);
  }
  render() {
    return (
      <div>
        <p>
          <input
            type="text"
            name="tweet"
            placeholder="Username"
            onChange={this.handleChange}
            value={this.state.tweet}
          />
        </p>
        <button onClick={this.handleClick}>Save Tweet</button>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    saveTweet: tweet => {
      dispatch(saveTweet(tweet));
    }
  };
}

export default connect(
  null,
  mapDispatchToProps
)(AddTweet);
