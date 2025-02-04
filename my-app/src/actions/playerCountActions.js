import axios from "axios";

export const FETCH_COUNT_DATA_START = "FETCH_COUNT_DATA_START";
export const FETCH_COUNT_DATA_SUCCESS = "FETCH_COUNT_DATA_SUCCESS";
export const FETCH_COUNT_DATA_FAILURE = "FETCH_COUNT_DATA_FAILURE";

export const getData = () => {
  return dispatch => {
    dispatch({ type: FETCH_COUNT_DATA_START });
    axios
      .get("https://api.bf4stats.com/api/onlinePlayers?output=json")
      .then(res => {
        console.log(res.data)
        
        dispatch({ type: FETCH_COUNT_DATA_SUCCESS, payload: res.data });
        
      })
      .catch(err => {
        dispatch({ type: FETCH_COUNT_DATA_FAILURE, payload: err.response });
      });
  };
};