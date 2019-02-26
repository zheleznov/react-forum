import {connect} from 'react-redux';
import HomePage from '../../../Pages/HomePage';

const mapStateToProps = ({data: {categories}}) => {
  return {
    categories
  }
};

const HomePageContainer = connect(mapStateToProps)(HomePage);
export default HomePageContainer;
