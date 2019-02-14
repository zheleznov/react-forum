import React from 'react';

const ForumLastThread = (props) => {
  return (
      <div className="last-thread">
        <img className="avatar"
             src="https://firebasestorage.googleapis.com/v0/b/forum-2a982.appspot.com/o/images%2Favatars%2Frah?alt=media&amp;token=7ad21914-a4f4-4ad0-add6-17e6d3ae9679"
             alt="" />
        <div className="last-thread-details">
          <a href="thread.html">Post Reactions</a>
          <p className="text-xsmall">By <a href="profile.html">Rolf
            Haug</a>, a month ago</p>
        </div>
      </div>
  );
};

export default ForumLastThread;
