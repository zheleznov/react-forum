import {connect} from 'react-redux';
import ForumLastPost from '../../../Forums/ForumLastPost';

const mapStateToProps = ({data: {users, posts, threads}}) => {
  return {
    posts,
    users,
    threads,
  };
};

const ForumLastPostContainer = connect(mapStateToProps)(ForumLastPost);
export default ForumLastPostContainer;
