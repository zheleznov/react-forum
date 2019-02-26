import {constants} from '../constants';
import {dataService} from '../../services';
import store from '../store';

function getAllItemsFromCollection() {
  store.dispatch(request());

  dataService.getAllItemsFromCollection('data').then(data => {
    store.dispatch(success(Object.values(data)[0]));
  }).catch(error => {
    store.dispatch(failure(error));
  });

  function request() {
    return {type: constants.FETCH_DATA_REQUEST};
  }

  function success(data) {
    return {type: constants.FETCH_DATA_SUCCESS, data};
  }

  function failure(error) {
    return {type: constants.FETCH_DATA_FAILURE, error};
  }
}

export default {
  getAllItemsFromCollection,
};
