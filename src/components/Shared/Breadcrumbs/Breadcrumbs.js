import React from 'react';
import {Link, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import './Breadcrumbs.css';

class Breadcrumbs extends React.Component {
  componentWillUpdate(nextProps, nextState, nextContext) {
   // console.log(nextProps)
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('11111111')
  }

  render() {
    const {categories, forums, history} = this.props;


    console.log(this.props);
    const categoryPage = history.location.pathname.match(
        /\/(category)\/(.*)/);
    const forumPage = history.location.pathname.match(/\/(forum)\/(.*)/);
    const catId = categoryPage && categoryPage[2];
    const forumId = forumPage && forumPage[2];
    let category;
    let forum;

    if (categoryPage) {
      category = <li><Link to="/category.html">{categories[catId].name}</Link></li>;
    }

    if (forumPage) {
      forum = <li className="active"><Link to="#">Cooking</Link></li>;
    }

    return (
        <div className="col-full push-top">
          <ul className="breadcrumbs">
            <li>
              <Link to="/"><i className="fa fa-home fa-btn"></i>Home</Link>
            </li>
            {forum}
            {forum}
          </ul>
        </div>
    );
  }
}

const mapStateToProps = ({data}) => {
  return {
    categories: data['categories'],
    forums: data['forums']
  }
};

export default connect(mapStateToProps)(withRouter(Breadcrumbs));
