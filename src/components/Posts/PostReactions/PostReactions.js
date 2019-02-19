import React from 'react';

const PostReactions = (props) => {
  return (
      <div className="reactions">
        <ul>
          <li>💡</li>
          <li>❤️</li>
          <li>👎</li>
          <li>👍</li>
          <li>👌</li>
        </ul>
        <button className="btn-xsmall"><span className="emoji">❤️</span>️
          3
        </button>
        <button className="btn-xsmall active-reaction"><span
            className="emoji">👌️</span>️ 1
        </button>
        <button className="btn-xsmall">+ <i
            className="fa fa-smile-o emoji"></i></button>
      </div>
  );
};

export default PostReactions;
