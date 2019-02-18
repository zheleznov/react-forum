import {connect} from 'react-redux';
import ForumLastPost from '../../../Forums/ForumLastPost';

const mapStateToProps = ({data}) => {
  const users = data['users'];
  const posts = data['posts'];
  const threads = data['threads'];

  return {
    posts,
    users,
    threads,
  };
};

const ForumLastPostContainer = connect(mapStateToProps)(ForumLastPost);
export default ForumLastPostContainer;
