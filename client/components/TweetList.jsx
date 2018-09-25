import React from "react";
import { connect } from "react-redux";

import Tweet from "./Tweet";

const TweetList = props => {
  console.log(props.tweets.tweets);
  return (
    <div id="containerbird" class="container">
      <div id="birdFloat" class="row">
        <div id="col1" class="col">
          <div id="birdFloat">
            <img id="bird2" src="/images/kakapo/kakapomovesmile.gif" />
          </div>
        </div>
        <div id="speechCol" class="col">
          <div id="speech-bubble" className="tweetList">
            {props.tweets.tweets &&
              props.tweets.tweets.map(tweet => {

                return (
                  <Tweet
                    key={tweet.id}
                    tweet={tweet.tweet}
                    user_id={tweet.user_id}
                  />
                );

                if (tweet.cohort == props.cohort) {
                  return (
                    <Tweet
                      key={tweet.id}
                      tweet={tweet.tweet}
                      user_id={tweet.user_id}
                    />
                  );
                } else if (props.cohort == 0) {
                  return (
                    <Tweet
                      key={tweet.id}
                      tweet={tweet.tweet}
                      user_id={tweet.user_id}
                    />
                  );
                }

              })}
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    tweets: state.tweets
  };
};

export default connect(mapStateToProps)(TweetList);
