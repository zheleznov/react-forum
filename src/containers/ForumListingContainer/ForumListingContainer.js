import {connect} from 'react-redux';
import ForumListing from '../../components/ForumListing';

const mapStateToProps = ({data}) => {
  const categories = data['categories'];

  const forums = Object.keys(data['forums']).map(key => {
    return data['forums'][key];
  });

  return {
    forums,
    categories,
  };
};

const ForumListingContainer = connect(mapStateToProps)(ForumListing);
export default ForumListingContainer;
