import { GET_QUANTITY_USERS_SUCCESS } from "../actions/actionTypes";

const initialState = {
  quantityUsers: null,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_QUANTITY_USERS_SUCCESS: {
      return {
        ...state,
        quantityUsers: payload,
      };
    }

    default:
      return state;
  }
};
