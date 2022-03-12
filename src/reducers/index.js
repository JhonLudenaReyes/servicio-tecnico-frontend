import { combineReducers } from "redux";
import authReducer from "./authReducer";
import locationReducer from "./locationReducer";
import personReducer from "./personReducer";

export default combineReducers({
  auth: authReducer,
  location: locationReducer,
  person: personReducer,
});
