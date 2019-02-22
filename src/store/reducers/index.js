import users from './user.reducer';
import categories from './categories.reducer';
import forums from './forums.reducer';
import threads from './threads.reducer';
import posts from './posts.reducer';
import {combineReducers} from 'redux';

const reducer = combineReducers({
  categories,
  forums,
  threads,
  posts,
  users,
});

export default reducer;
