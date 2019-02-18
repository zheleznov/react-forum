import React, {Fragment} from 'react';
import ForumsListContainer from '../../Containers/Forums/ForumsListContainer';

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
          <ForumsListContainer/>
        </Fragment>
    );
  }
}

export default CategoryForumsPage;
