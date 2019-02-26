import {dataConstants} from '../constants';
import {dataService} from '../../services';
import store from '../store';

function getAllItemsFromCollection() {
  store.dispatch(request());

  dataService.getAllItemsFromCollection('forums').then(forums => {
    store.dispatch(success(forums));
  }).catch(error => {
    store.dispatch(failure(error));
  });

  function request() {
    return {type: dataConstants.FETCH_FORUMS_REQUEST};
  }

  function success(items) {
    return {type: dataConstants.FETCH_FORUMS_SUCCESS, items};
  }

  function failure(error) {
    return {type: dataConstants.FETCH_FORUMS_FAILURE, error};
  }
}

export default {
  getAllItemsFromCollection,
};
