import React from "react";
import Redux from "redux";

const Tweet = props => {
  console.log(props.user_id)
  return (
    <div>
      <p>{props.tweet}</p>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    tweets: state.tweets
  };
};

export default Tweet;
