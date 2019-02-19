import React from 'react';
import ForumsListContainer from '../../Containers/Forums/ForumsListContainer';

class CategoryForumsPage extends React.Component {
  render() {
    const {categories, match} = this.props;
    const categoryId = match.params.categoryId;
    const category = categories[categoryId];

    return (
        <div className="container">
            <div className="col-full push-top">
              <h1>{category.name}</h1>
            </div>
            <ForumsListContainer/>
        </div>
    );
  }
}

export default CategoryForumsPage;
