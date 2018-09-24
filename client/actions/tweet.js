import request from "../utils/api";

//this is for saving tweets!
export function saveTweet(tweet, id) {
  let obj = {
    tweet: tweet,
    user_id: id
  };
  return function (dispatch) {
    dispatch(saveTweetReq());
    request("post", "/add/tweet", obj).then(response => {
      if (!response.ok) {
        dispatch(saveError());
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

function error() {
  console.log("error!!!!");
}

//get all tweets

export function getTweet() {
  //   let obj = {
  //     tweet: tweet,
  //     user_id: id
  //   };
  return function (dispatch) {
    dispatch(getTweetReq());
    request("get", "/tweet").then(response => {
      if (!response.ok) {
        dispatch(error());
      } else {
        dispatch(getTweetRec(response));
      }
    });
  };
}

function getTweetReq() {
  return {
    type: "TWEET_GET_REQUEST",
    isFetching: true,
    isAuthenticated: false
  };
}

function getTweetRec(response) {
  return {
    type: "TWEET_GET_RECEIPT",
    isFetching: false,
    isAuthenticated: false,
    tweets: response.body
  };
}
