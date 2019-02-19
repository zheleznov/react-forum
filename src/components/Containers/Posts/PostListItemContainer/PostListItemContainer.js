import {connect} from 'react-redux';
import PostListItem from '../../../Posts/PostsListItem';

const mapStateToProps = ({data}) => {
  // return categories Ids
  const users = data['users'];

  return {
    users,
  };
};

const PostListItemContainer = connect(mapStateToProps)(PostListItem);
export default PostListItemContainer;
