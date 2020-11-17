import {
  GET_USERS_SUCCESS,
} from '../actions/actionTypes'

const initialState = {
  users: [],
}

export default (state = initialState, {type, payload}) => {

  switch (type) {
    case GET_USERS_SUCCESS: {
      return {
        ...state,
        users: payload
      }
    }

    default:
      return state
  }
}

