import {connect} from 'react-redux';
import ForumsList from '../../../Forums/ForumsList';

const mapStateToProps = ({data: {categories, forums}}) => {
  return {
    categories,
    forums,
  };
};

const ForumsListContainer = connect(mapStateToProps)(ForumsList);
export default ForumsListContainer;
