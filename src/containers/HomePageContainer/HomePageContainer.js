import {connect} from 'react-redux';
import HomePage from '../../components/Pages/HomePage';

const mapStateToProps = ({data}) => {
  const categories = data['categories'];
  const forums = data['forums'];

  return {
    categories,
    forums
  };
};

const HomePageContainer = connect(mapStateToProps)(HomePage);
export default HomePageContainer;
