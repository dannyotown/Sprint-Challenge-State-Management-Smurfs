import axios from "axios";

export const API_START = "API_START";
export const API_LOADING= "API_LOADING";
export const API_ERROR="API_ERROR";
export const API_POSTSTART = "API_POSTSTART"
export const API_SUCCESS = "API_SUCCESS";
export const API_FAIL = "API_FAIL";

export function fetchAPI() {
    return dispatch => {
      dispatch({ type: API_START });
      axios
        .get("http://localhost:3333/smurfs")
        .then(res => {
          dispatch({ type: API_LOADING, payload: res.data });
        })
        .catch(err => {
          dispatch({ type: API_ERROR, payload: err });
        });
    };
  }
  
  export function postAPI(payload) {
    return dispatch => {
      dispatch({ type: API_POSTSTART });
      axios
        .post("http://localhost:3333/smurfs", payload)
        .then(res => {
          dispatch({ type: API_SUCCESS, payload: res.data });
        })
        .catch(err => {
          dispatch({ type: API_FAIL, payload: err });
        });
    };
  }
  