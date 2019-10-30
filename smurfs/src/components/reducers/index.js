import {
    API_START,
    API_LOADING,
    API_ERROR
  } from "../actions";
  
  const initialState = {
    api: [],
    isLoading: false,
    error: null
  };

  export function reducer(state = initialState, action) {
    switch (action.type) {
      case API_START:
        return {
          ...state,
          isLoading: true
        };
      case API_LOADING:
        return {
          ...state,
          api: action.payload,
          isLoading: false
        };
      case API_ERROR:
        return {
          ...state,
          error: action.payload,
          isLoading: false
        };
      default:
        return state;
    }
  }
  