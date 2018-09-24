import { combineReducers } from "redux";

import auth from "./auth";
import tweet from "./tweet";
const reducers = combineReducers({
  auth,
  tweet
});

export default reducers;
