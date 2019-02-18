import {connect} from 'react-redux';
import ThreadListItem from '../../../Threads/ThreadListItem';

const mapStateToProps = ({data}) => {
  const users = data['users'];
  const posts = data['posts'];

  return {
    users,
    posts,
  };
};

const ThreadListItemContainer = connect(mapStateToProps)(ThreadListItem);
export default ThreadListItemContainer;
