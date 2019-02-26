import {userConstants} from '../constants';

const users = (state = {}, action) => {
  switch (action.type) {
    case userConstants.REGISTER_USER_REQUEST:
      return {registering: true};

    case userConstants.REGISTER_USER_SUCCESS:
      return {items: action.users};

    case userConstants.REGISTER_USER_FAILURE:
      return {error: action.error};

    default:
      return state;
  }
};

export default users;
