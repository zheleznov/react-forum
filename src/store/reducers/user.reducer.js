import {userConstants} from '../constants';

const users = (state = {}, action) => {
  switch (action.type) {
    case userConstants.FETCH_USERS_REQUEST:
      return {loading: true};

    case userConstants.FETCH_USERS_SUCCESS:
      return {items: action.users};

    case userConstants.FETCH_USERS_FAILURE:
      return {error: action.error};

    default:
      return state;
  }
};

export default users;
