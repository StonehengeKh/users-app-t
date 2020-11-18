import { createSelector } from "reselect";

const selectUsersQuantityReducer = (state) => state && state.usersQuantityReducer;

const selectUsersQuantity = createSelector(selectUsersQuantityReducer, (reducer) => {
  return reducer && reducer.quantityUsers;
});

export { selectUsersQuantity };
