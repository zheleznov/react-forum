import {constants} from '../constants';
import {userService} from '../../services';
import dataActions from './data.actions';
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
      _key: user.user.uid,
      name,
      username,
      email,
      avatar,
    }));

    const data = store.getState().data;
    const dataToFirebase = {
      categories: data.categories,
      forums: data.forums,
      threads: data.threads,
      posts: data.posts,
      users: data.users,
      stats: data.stats,
      moderators: data.moderators
    };

    if(await dataActions.updateFirebaseData(dataToFirebase)) {
      console.log('success user');
      return true
    }
  } catch (e) {
    store.dispatch(failure(e));
    console.info(e);
    return false;
  }

  return false;
}

async function loginUser({email, password}) {
  function request() {
    return {type: constants.LOGIN_USER_REQUEST};
  }

  function success() {
    return {type: constants.LOGIN_USER_SUCCESS};
  }

  function failure(error) {
    return {type: constants.LOGIN_USER_FAILURE, error};
  }

  store.dispatch(request());

  try {
    await userService.loginUser(email, password);
    store.dispatch(success());
    return true;
  } catch (e) {
    store.dispatch(failure(e));
    console.info(e);
    return false;
  }
}

export default {
  registerUser,
  loginUser,
};
