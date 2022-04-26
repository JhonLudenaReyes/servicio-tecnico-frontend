import { GET_PERMITS, SAVE_PERMIT, CHANGE_STATE } from "../actions/types";

const isEmpty = require("is-empty");

const initialState = {
  verification: false,
  permits: [],
};

const permitReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_PERMIT:
      return {
        ...state,
        verification: !isEmpty(action.payload),
      };
    case CHANGE_STATE:
      return {
        ...state,
        verification: action.payload,
      };
    case GET_PERMITS:
      return {
        ...state,
        permits: action.payload,
      };
    default:
      return state;
  }
};

export default permitReducer;
