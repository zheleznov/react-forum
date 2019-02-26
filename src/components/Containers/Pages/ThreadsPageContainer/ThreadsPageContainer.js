import {connect} from 'react-redux';
import ThreadsPage from '../../../Pages/ThreadsPage';

const mapStateToProps = ({data: {categories, forums, threads, users, posts}}) => {

  return {
    categories,
    forums,
    threads,
    users,
    posts,
  };
};

const ThreadsPageContainer = connect(mapStateToProps)(ThreadsPage);
export default ThreadsPageContainer;
