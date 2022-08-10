import { GET_ROLES, SAVE_ROLE } from "../actions/types";

const isEmpty = require("is-empty");

const initialState = {
  verification: false,
  roles: [],
};

const roleReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ROLES:
      return {
        ...state,
        roles: action.payload,
      };
    case SAVE_ROLE:
      return {
        ...state,
        verification: !isEmpty(action.payload),
      };
    default:
      return state;
  }
};

export default roleReducer;
