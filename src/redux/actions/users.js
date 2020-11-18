import {
  GET_USERS_REQUEST,
  GET_USERS_SUCCESS,
  GET_USERS_ERROR
} from "./actionTypes";

import {getUsers as getUsersApi} from "../../api";

export const getUsers = (page) => async dispatch => {
  dispatch ({type: GET_USERS_REQUEST})

  try {
    const users = await getUsersApi(page)
    dispatch({
      type: GET_USERS_SUCCESS,
      payload: users
    })
  } catch (err) {
    dispatch({
      type: GET_USERS_ERROR,
      payload: err,
      error: true
    })
  }
}