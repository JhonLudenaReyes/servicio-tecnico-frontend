import { GET_LOCATIONS } from "../actions/types";

const initialState = {
  locations: [],
};

const locationReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_LOCATIONS:
      return {
        ...state,
        locations: action.payload,
      };
    default:
      return state;
  }
};

export default locationReducer;
