import { combineReducers } from "redux";
import authReducer from "./authReducer";
import locationReducer from "./locationReducer";
import personReducer from "./personReducer";
import permitReducer from "./permitReducer";

export default combineReducers({
  auth: authReducer,
  location: locationReducer,
  person: personReducer,
  permit: permitReducer,
});
