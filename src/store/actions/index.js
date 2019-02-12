import actions from './actions';
import store from '../../store';

export default {
  getData() {
    return store.dispatch(actions.getData());
  }
};
