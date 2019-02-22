import {userConstants} from '../constants';
import {userService} from '../../services';
import store from '../store';

function registerUser(user) {
  return {
    type: userConstants.REGISTER_REQUEST,
    payload: user,
  };
}

function getAllUsers() {
  store.dispatch(request());

  userService.getAllUsers().then(users => {
    store.dispatch(success(users));
  }).catch(error => {
    store.dispatch(failure(error));
  });

  function request() {
    return {type: userConstants.FETCH_USERS_REQUEST};
  }

  function success(users) {
    return {type: userConstants.FETCH_USERS_SUCCESS, users};
  }

  function failure(error) {
    return {type: userConstants.FETCH_USERS_FAILURE, error};
  }
}

export default {
  getAllUsers,
};
