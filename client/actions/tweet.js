import request from "../utils/api";

//this is for saving tweets!
export function saveTweet(tweet) {
  let obj = {
    tweet: tweet,
    user_id: "leslie"
  };
  return function(dispatch) {
    dispatch(saveTweetReq());
    request("post", "/add/tweet", obj).then(response => {
      if (!response.ok) {
      } else {
        dispatch(saveTweetRec());
      }
    });
  };
}

function saveTweetReq() {
  return {
    type: "TWEET_SAVE_REQUEST",
    isFetching: true,
    isAuthenticated: true
  };
}

function saveTweetRec() {
  return {
    type: "TWEET_SAVE_RECEIPT",
    isFetching: false,
    isAuthenticated: true,
    response: "Tweet saved!!"
  };
}
