import {dataConstants} from "../constants";

const forums = (state = {}, action) => {
  switch (action.type) {
    case dataConstants.FETCH_FORUMS_REQUEST:
      return {loading: true};

    case dataConstants.FETCH_FORUMS_SUCCESS:
      return {items: action.items};

    case dataConstants.FETCH_FORUMS_FAILURE:
      return {error: action.error};

    default:
      return state;
  }
};

export default forums;
