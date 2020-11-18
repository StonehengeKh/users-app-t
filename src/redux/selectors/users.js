import { createSelector } from "reselect";

const selectUsersReducer = (state) => state && state.usersReducer;

const selectUsers = createSelector(selectUsersReducer, (reducer) => {
  return reducer && reducer.users;
});

export { selectUsers };
