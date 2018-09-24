import React from "react";

class AddTweet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tweet: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value
    });
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

export default AddTweet;
