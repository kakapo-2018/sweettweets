export default function tweet(state = [], action) {
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
        isFetching: true,
        isAuthenticated: false,
        tweet: action.response
      };
    default:
      return state;
  }
}
