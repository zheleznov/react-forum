import React, {Fragment} from 'react';
import PropTypes from 'prop-types';

const PostContent = ({post}) => {
  const {publishedAt, text} = post;

  return (
      <Fragment>
        <div className="post-content">
          <div>
            <p>{text} </p>
          </div>
          <a href="#" className="link-unstyled"
             title="Make a change"><i className="fa fa-pencil"></i></a>
        </div>

        <div className="post-date text-faded">
          {publishedAt} hours ago
        </div>
      </Fragment>
  );
};

PostContent.propTypes = {
  post: PropTypes.object.isRequired
};

export default PostContent;
