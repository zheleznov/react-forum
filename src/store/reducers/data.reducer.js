import {constants} from '../constants';

const categories = (state = {}, action) => {
  switch (action.type) {
    case constants.FETCH_DATA_REQUEST:
      return {loading: true};

    case constants.FETCH_DATA_SUCCESS:
      return action.data;

    case constants.FETCH_DATA_FAILURE:
      return {error: action.error};

    case constants.REGISTER_USER_REQUEST:
      return {
        ...state,
        registering: true
      };

    case constants.REGISTER_USER_SUCCESS:
      const {user} = action;
      const newState = {...state, registering: false};
      newState.users[user._key] = user;
      return newState;

    case constants.REGISTER_USER_FAILURE:
      return {
        ...state,
        registering: false,
        error: action.error
      };

    default:
      return state;
  }
};

export default categories;
