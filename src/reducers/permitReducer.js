import {
  GET_PERMITS,
  SAVE_PERMIT,
  CHANGE_STATE,
  DELETE_PERMIT_BY_ID,
  SET_PERMIT,
  EDIT_PERMIT,
} from "../actions/types";

const isEmpty = require("is-empty");

const initialState = {
  verification: false,
  permits: [],
  permit: {},
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
    case SET_PERMIT:
      return {
        ...state,
        permit: action.payload,
      };
    case EDIT_PERMIT:
      return {
        ...state,
        verification: !isEmpty(action.payload),
      };
    case DELETE_PERMIT_BY_ID:
      return {
        ...state,
        verification: !isEmpty(action.payload),
      };
    default:
      return state;
  }
};

export default permitReducer;
