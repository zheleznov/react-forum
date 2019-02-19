import {connect} from 'react-redux';
import PostsPage from '../../../Pages/PostsPage';

const mapStateToProps = ({data}) => {
  // return categories Ids
  const threads = data['threads'];
  const users = data['users'];
  const posts = Object.values(data['posts']);

  return {
    threads,
    users,
    posts
  };
};

const PostsPageContainer = connect(mapStateToProps)(PostsPage);
export default PostsPageContainer;
