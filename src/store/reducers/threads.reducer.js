import {dataConstants} from "../constants";

const threads = (state = {}, action) => {
  switch (action.type) {
    case dataConstants.FETCH_THREADS_REQUEST:
      return {loading: true};

    case dataConstants.FETCH_THREADS_SUCCESS:
      return {items: action.items};

    case dataConstants.FETCH_THREADS_FAILURE:
      return {error: action.error};

    default:
      return state;
  }
};

export default threads;
