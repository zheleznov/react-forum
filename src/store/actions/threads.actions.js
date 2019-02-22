import {dataConstants} from '../constants';
import {dataService} from '../../services';
import store from '../store';

function getAllItemsFromCollection() {
  store.dispatch(request());

  dataService.getAllItemsFromCollection('threads').then(users => {
    store.dispatch(success(users));
  }).catch(error => {
    store.dispatch(failure(error));
  });

  function request() {
    return {type: dataConstants.FETCH_THREADS_REQUEST};
  }

  function success(items) {
    return {type: dataConstants.FETCH_THREADS_SUCCESS, items};
  }

  function failure(error) {
    return {type: dataConstants.FETCH_THREADS_FAILURE, error};
  }
}

export default {
  getAllItemsFromCollection,
};
