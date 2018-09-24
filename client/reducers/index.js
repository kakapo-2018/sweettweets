import { combineReducers } from "redux";

import auth from "./auth";
import tweets from "./tweets";
const reducers = combineReducers({
  auth,
  tweets
});

export default reducers;
