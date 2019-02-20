import React, {Fragment} from 'react';
import ForumsListContainer from '../../Containers/Forums/ForumsListContainer';
import ForumsStatsContainer from '../../Containers/Forums/ForumStatsContainer';

class CategoryForumsPage extends React.Component {
  render() {
    const {categories, match} = this.props;
    const categoryId = match.params.categoryId;
    const category = categories[categoryId];

    return (
        <Fragment>
          <div className="container">
            <div className="col-full push-top">
              <h1>{category.name}</h1>
            </div>
            <div className="col-full">
              <ForumsListContainer/>
            </div>
          </div>
          <ForumsStatsContainer/>
        </Fragment>
    );
  }
}

export default CategoryForumsPage;
