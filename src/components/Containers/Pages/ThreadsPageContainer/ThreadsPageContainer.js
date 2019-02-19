import {connect} from 'react-redux';
import ThreadsPage from '../../../Pages/ThreadsPage';

const mapStateToProps = ({data}) => {
  const categories = data['categories'];
  const forums = data['forums'];
  const threads = data['threads'];
  const users = data['users'];
  const posts = data['posts'];

  return {
    categories,
    forums,
    threads,
    users,
    posts
  };
};

const ThreadsPageContainer = connect(mapStateToProps)(ThreadsPage);
export default ThreadsPageContainer;
