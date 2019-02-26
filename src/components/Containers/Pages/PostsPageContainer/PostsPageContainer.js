import {connect} from 'react-redux';
import PostsPage from '../../../Pages/PostsPage';

const mapStateToProps = ({data: {threads, users, posts}}) => {
  return {
    threads,
    users,
    posts,
  };
};

const PostsPageContainer = connect(mapStateToProps)(PostsPage);
export default PostsPageContainer;
