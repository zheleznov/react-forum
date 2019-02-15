import React, {Fragment} from 'react';
import {connect} from 'react-redux';
import ForumsListContainer from '../../../containers/ForumsListContainer';

class CategoryForumsPage extends React.Component {
  render() {
    const {categories, match} = this.props;
    const categoryId = match.params.categoryId;
    const category = categories[categoryId];

    return (
      <Fragment>
        <div className="col-full push-top">
          <h1>{category.name}</h1>
        </div>
        <ForumsListContainer />
      </Fragment>
    );
  }
}

const mapStateToProps = ({data}) => {
  const categories = data['categories'];

  return {
    categories
  }
};

export default connect(mapStateToProps)(CategoryForumsPage);
