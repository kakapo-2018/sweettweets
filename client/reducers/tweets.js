export default function tweets(state = [], action) {
  switch (action.type) {
    case "TWEET_SAVE_REQUEST":
      return {
        ...state,
        isFetching: true,
        isAuthenticated: true,
        errorMessage: ""
      };
    case "TWEET_SAVE_RECEIPT":
      return {
        ...state,
        isFetching: false,
        isAuthenticated: true
        // tweets: action.response
      };
    case "TWEET_GET_REQUEST":
      return {
        ...state,
        isFetching: true,
        isAuthenticated: false
      };
    case "TWEET_GET_RECEIPT":
      return {
        ...state,
        isFetching: false,
        isAuthenticated: false,
        tweets: action.tweets
      };
    case "TWEET_UPDATE_REQUEST":
      return {
        ...state,
        isFetching: true,
        isAuthenticated: true
      };
    case "TWEET_UPDATE_RECEIPT":
      return {
        ...state,
        isFetching: false,
        isAuthenticated: true,
        tweets: action.tweets
      };
    case "TWEET_DELETE_REQUEST":
      return {
        ...state,
        isFetching: true,
        isAuthenticated: true
      };
    case "TWEET_DELETE_RECEIPT":
      return {
        ...state,
        isFetching: false,
        isAuthenticated: true,
        tweets: action.tweets
      };
    default:
      return state;
  }
}
