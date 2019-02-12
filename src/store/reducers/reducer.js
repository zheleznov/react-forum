import actionTypes from '../constants/actionTypes';
import {combineReducers} from 'redux';
import fakeData from '../../data';

const initialState = {
  data: fakeData,
  loading: true,
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_DATA:
      return state;

    default:
      return state;
  }
};

const loadingReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_DATA:
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
