
import {
    FETCH_COUNT_DATA_START,
    FETCH_COUNT_DATA_SUCCESS,
    FETCH_COUNT_DATA_FAILURE
  } from '../actions';

const initialState = {
    playerCount: [],
    isLoading: false,
    error: ''
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_COUNT_DATA_START:
        return {
          ...state,
          isLoading: true,
          error: ''
        };
      case FETCH_COUNT_DATA_SUCCESS:
        return {
          ...state,
          isLoading: false,
          playerCount: action.payload,
          error: ''
        };
      default:
        return state;
    }
  };
  