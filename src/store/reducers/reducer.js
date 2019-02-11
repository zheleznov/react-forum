import actionTypes from '../constants/actionTypes';
import {combineReducers} from 'redux';
import data from '../../data';

const initialState = {
  data: data,
  loading: true,
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_CATEGORIES:
      return state['categories'];

    default:
      return state;
  }
};

const loadingReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_CATEGORIES:
      return false;

    default:
      return state;
  }
};

const reducer = (state = initialState, action) => {
  return {
    data: dataReducer(state.data, action),
    loading: loadingReducer(state.loading, action)
  }
};

export default reducer;
