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

//this is for Updating tweets!
export function updateTweet(tweet, id) {
  let obj = {
    tweet: tweet,
    user_id: id
  };
  return function (dispatch) {
    dispatch(updateTweetReq());
    request("put", "/tweet", obj).then(response => {
      if (!response.ok) {
        dispatch(saveError());
      } else {
        dispatch(updateTweetRec());
      }
    });
  };
}

function updateTweetReq() {
  return {
    type: "TWEET_UPDATE_REQUEST",
    isFetching: true,
    isAuthenticated: true
  };
}

function updateTweetRec() {
  return {
    type: "TWEET_UPDATE_RECEIPT",
    isFetching: false,
    isAuthenticated: true,
    response: "Tweet UPDATED!!"
  };
}

function error() {
  console.log("error in update!!!!");
}