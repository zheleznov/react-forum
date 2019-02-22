import {dataConstants} from "../constants";

const categories = (state = {}, action) => {
  switch (action.type) {
    case dataConstants.FETCH_CATEGORIES_REQUEST:
      return {loading: true};

    case dataConstants.FETCH_CATEGORIES_SUCCESS:
      return {items: action.items};

    case dataConstants.FETCH_CATEGORIES_FAILURE:
      return {error: action.error};

    default:
      return state;
  }
};

export default categories;
