import {connect} from 'react-redux';
import PostListItem from '../../../Posts/PostsListItem';

const mapStateToProps = ({data: {users, posts}}) => {
  return {
    users,
    posts
  };
};

const PostListItemContainer = connect(mapStateToProps)(PostListItem);
export default PostListItemContainer;
