import {
  GET_QUANTITY_USERS_REQUEST,
  GET_QUANTITY_USERS_SUCCESS,
  GET_QUANTITY_USERS_ERROR
} from "./actionTypes";

import {getUsersQuantity as getUsersQuantityApi} from "../../api";

export const getUsersQuantity = () => async dispatch => {
  dispatch ({type: GET_QUANTITY_USERS_REQUEST})

  try {
    const usersQuantity = await getUsersQuantityApi()
    dispatch({
      type: GET_QUANTITY_USERS_SUCCESS,
      payload: usersQuantity
    })
  } catch (err) {
    dispatch({
      type: GET_QUANTITY_USERS_ERROR,
      payload: err,
      error: true
    })
  }
}