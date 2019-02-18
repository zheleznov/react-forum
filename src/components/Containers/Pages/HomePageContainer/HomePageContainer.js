import {connect} from 'react-redux';
import HomePage from '../../../Pages/HomePage';

const mapStateToProps = ({data}) => {
  // return categories Ids
  const categoriesIds = Object.keys(data['categories']);

  return {
    categoriesIds,
  };
};

const HomePageContainer = connect(mapStateToProps)(HomePage);
export default HomePageContainer;
