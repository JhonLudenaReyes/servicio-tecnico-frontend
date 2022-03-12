import {
  SAVE_PERSON,
  CHANGE_STATE,
  GET_ALL_PEOPLE,
  DELETE_PERSON_BY_ID,
  SET_PERSON,
  EDIT_PERSON,
  RESET_STORE,
} from "../actions/types";

const isEmpty = require("is-empty");

const initialState = {
  verification: false,
  people: [],
  person: {},
};

const personReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_PERSON:
      return {
        ...state,
        verification: !isEmpty(action.payload),
      };
    case CHANGE_STATE:
      return {
        ...state,
        verification: action.payload,
      };
    case GET_ALL_PEOPLE:
      return {
        ...state,
        people: action.payload,
      };
    case DELETE_PERSON_BY_ID:
      return {
        ...state,
        verification: !isEmpty(action.payload),
      };
    case SET_PERSON:
      return {
        ...state,
        person: action.payload,
      };
    case EDIT_PERSON:
      return {
        ...state,
        verification: !isEmpty(action.payload),
      };
    case RESET_STORE:
      return {
        ...state,
        person: action.payload,
      };
    default:
      return state;
  }
};

export default personReducer;
