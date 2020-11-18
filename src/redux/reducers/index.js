import { combineReducers } from "redux";

import usersReducer from "./users";
import usersQuantityReducer from "./usersQuantity";

export default combineReducers({
  usersReducer,
  usersQuantityReducer,
});
