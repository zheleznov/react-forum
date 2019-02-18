import {connect} from 'react-redux';
import CategoryForumsPage from '../../../Pages/CategorieForumsPage';

const mapStateToProps = ({data}) => {
  const categories = data['categories'];

  return {
    categories,
  };
};

const CategoryForumsPageContainer = connect(mapStateToProps)(CategoryForumsPage);
export default CategoryForumsPageContainer;
