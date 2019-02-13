import {connect} from 'react-redux';
import ForumsList from '../../components/ForumsList';

const mapStateToProps = ({data}) => {
  const categories = Object.keys(data['categories']).map(key => {
    return data['categories'][key];
  });

  return {
    categories,
  };
};

const ForumsListContainer = connect(mapStateToProps)(ForumsList);
export default ForumsListContainer;
