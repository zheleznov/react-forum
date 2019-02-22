import {dataConstants} from '../constants';
import {dataService} from '../../services';
import store from '../store';

function getAllItemsFromCollection() {
  store.dispatch(request());

  dataService.getAllItemsFromCollection('categories').then(users => {
    store.dispatch(success(users));
  }).catch(error => {
    store.dispatch(failure(error));
  });

  function request() {
    return {type: dataConstants.FETCH_CATEGORIES_REQUEST};
  }

  function success(items) {
    return {type: dataConstants.FETCH_CATEGORIES_SUCCESS, items};
  }

  function failure(error) {
    return {type: dataConstants.FETCH_CATEGORIES_FAILURE, error};
  }
}

export default {
  getAllItemsFromCollection,
};
