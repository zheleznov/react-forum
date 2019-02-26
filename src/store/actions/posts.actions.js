import {dataConstants} from '../constants';
import {dataService} from '../../services';
import store from '../store';

function getAllItemsFromCollection() {
  store.dispatch(request());

  dataService.getAllItemsFromCollection('posts').then(posts => {
    store.dispatch(success(posts));
  }).catch(error => {
    store.dispatch(failure(error));
  });

  function request() {
    return {type: dataConstants.FETCH_POSTS_REQUEST};
  }

  function success(items) {
    return {type: dataConstants.FETCH_POSTS_SUCCESS, items};
  }

  function failure(error) {
    return {type: dataConstants.FETCH_POSTS_FAILURE, error};
  }
}

export default {
  getAllItemsFromCollection,
};
