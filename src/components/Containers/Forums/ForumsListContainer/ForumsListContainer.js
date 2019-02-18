import {connect} from 'react-redux';
import ForumsList from '../../../Forums/ForumsList';

const mapStateToProps = ({data}) => {
  const categories = data['categories'];
  const forums = data['forums'];

  return {
    forums,
    categories,
  };
};

const ForumsListContainer = connect(mapStateToProps)(ForumsList);
export default ForumsListContainer;
