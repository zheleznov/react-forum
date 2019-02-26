import {constants} from '../constants';
import {userService} from '../../services';
import store from '../store';

async function registerUser({name, username, email, password, avatar}) {
  function request() {
    return {type: constants.REGISTER_USER_REQUEST};
  }

  function success(user) {
    return {type: constants.REGISTER_USER_SUCCESS, user};
  }

  function failure(error) {
    return {type: constants.REGISTER_USER_FAILURE, error};
  }

  store.dispatch(request());

  try {
    const user = await userService.signUpNewUser(email, password);
    store.dispatch(success({
      _key: user.uid,
      name,
      username,
      email,
      avatar,
    }));
  } catch (e) {
    store.dispatch(failure(e));
    console.info(e);
  }
}

export default {
  registerUser,
};
