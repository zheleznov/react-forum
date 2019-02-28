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

async function updateFirebaseData(data) {
  function request() {
    return {type: constants.SEND_DATA_REQUEST};
  }

  function success(data) {
    return {type: constants.SEND_DATA_SUCCESS, data};
  }

  function failure(error) {
    return {type: constants.SEND_DATA_FAILURE, error};
  }

  store.dispatch(request());

  try{
    await dataService.sendDataToFirebase(data);
    console.log('data success');
    return true;
  } catch(error) {
    console.info(error);
    store.dispatch(failure(error));
    return false;
  }

}

export default {
  getAllItemsFromCollection,
  updateFirebaseData
};
