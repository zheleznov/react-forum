import actions from './actions';
import store from '../../store';

export default {
  getCategories() {
    return store.dispatch(actions.getCategories());
  }
};
