import request from "../utils/api";

export function requestProfile(message) {
  return {
    type: "REQUEST_PROFILE",
    isFetching: true,
    isAuthenticated: true,
    message
  };
}
export function receiveProfile(message) {
  return {
    type: "RECIEVE_PROFILE",
    isFetching: false,
    isAuthenticated: true,
    message
  };
}

export function registerError(message) {
  return {
    type: "REGISTER_FAILURE",
    isFetching: false,
    isAuthenticated: false,
    message
  };
}

export function addProfile(profileInfo) {
  return dispatch => {
    dispatch(requestProfile(profileInfo));
    return request(profileInfo)
      .then(response => {
        if (!response.ok) {
          dispatch(registerError(response.body.message));
          return Promise.reject(response.body.message);
        } else {
          dispatch(receiveProfile(profileInfo));
        }
      })
      .catch(err => {
        dispatch(registerError(err.response.body.message));
      });
  };
}
