import {dataConstants} from "../constants";

const posts = (state = {}, action) => {
  switch (action.type) {
    case dataConstants.FETCH_POSTS_REQUEST:
      return {loading: true};

    case dataConstants.FETCH_POSTS_SUCCESS:
      return {items: action.items};

    case dataConstants.FETCH_POSTS_FAILURE:
      return {error: action.error};

    default:
      return state;
  }
};

export default posts;
