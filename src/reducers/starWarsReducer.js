import {
  FETCH_CHARS_START,
  FETCH_CHARS_SUCCESS,
  FETCH_CHARS_FAILURE
} "../actions";

const initialState = {
  characters: [],
  isFetching: false,
  error: ''
  // Array characters, Boolean fetching, null error.
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CHARS_START:
      return {
        ...state,
        isFetching: true,
        error: ""
      };
    case FETCH_CHARS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        error: "",
        characters: action.payload
      }
    case FETCH_CHARS_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    default:
      return state;
  }
};

export default charsReducers
