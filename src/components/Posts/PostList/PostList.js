import React from 'react';

const PostList = (props) => {
  return (
      <div className="container">

        <div className="col-large push-top">

          <ul className="breadcrumbs">
            <li><a href="#"><i className="fa fa-home fa-btn"></i>Home</a></li>
            <li><a href="category.html">Discussions</a></li>
            <li className="active"><a href="#">Cooking</a></li>
          </ul>

          <h1>Wasabi vs horseraddish?</h1>

          <p>
            By <a href="#" className="link-unstyled">Robin</a>, 2 hours ago.
            <span style="float:right; margin-top: 2px;"
                  className="hide-mobile text-faded text-small">3 replies by 3 contributors</span>
          </p>

          <div className="post-list">

            <div className="post">

              <div className="user-info">
                <a href="profile.html#profile-details"
                   className="user-name">Robin</a>

                <a href="profile.html#profile-details">
                  <img className="avatar-large"
                       src="http://i.imgur.com/s0AzOkO.png" alt="" />
                </a>

                <p className="desktop-only text-small">107 posts</p>

                <p className="desktop-only text-small">23 threads</p>

                <span className="online desktop-only">online</span>

              </div>

              <div className="post-content">
                <div>
                  <p>
                    Is horseradish and Wasabi the same thing? I've heard so many
                    different things.<br/><br/>
                    I want to know once and for all.
                  </p>
                </div>
                <a href="#" style="margin-left: auto;" className="link-unstyled"
                   title="Make a change"><i className="fa fa-pencil"></i></a>
              </div>


              <div className="post-date text-faded">
                6 hours ago
              </div>

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

            </div>

            <div className="post">

              <div className="user-info">
                <a href="profile.html#profile-details" className="user-name">Joseph
                  Kerr</a>

                <a href="profile.html#profile-details">
                  <img className="avatar-large"
                       src="https://www.sideshowtoy.com/photo_9030371_thumb.jpg"
                       alt="" />
                </a>

                <p className="desktop-only text-small">116 posts</p>

                <p className="desktop-only text-small">73 threads</p>

                <span className="online desktop-only">online</span>

              </div>

              <div className="post-content">
                <div>
                  <blockquote className="small">
                    <div className="author">
                      <a href="/user/robin" className=""> robin</a>
                      <span className="time">a month ago</span>
                      <i className="fa fa-caret-down"></i>
                    </div>

                    <div className="quote">
                      <p>Is horseradish and Wasabi the same thing? I've heard so
                        many different things.</p>
                    </div>
                  </blockquote>
                  <p>They're not the same!</p>
                </div>
                <a className="edit-post link-unstyled"><i
                    className="fa fa-pencil"></i></a>
              </div>


              <div className="post-date text-faded">
                6 hours ago
              </div>

              <div className="reactions">
                <button className="btn-xsmall">+ <i
                    className="fa fa-smile-o emoji"></i></button>
              </div>

            </div>

            <div className="post">

              <div className="user-info">
                <a href="profile.html#profile-details" className="user-name">Ray-Nathan
                  James</a>

                <a href="profile.html#profile-details">
                  <img className="avatar-large"
                       src="https://firebasestorage.googleapis.com/v0/b/forum-2a982.appspot.com/o/images%2Favatars%2Fraynathan?alt=media&amp;token=bd9a0f0e-60f2-4e60-b092-77d1ded50a7e"
                       alt="" />
                </a>

                <p className="desktop-only text-small">10 posts</p>

                <p className="desktop-only text-small">4 threads</p>

                <span className="offline desktop-only">offline</span>

              </div>

              <div className="post-content">
                <div>
                  <p>
                    <a href="/user/Joker" className="">@Joker</a> is right,
                    they're not the same.
                  </p>
                  <p>
                    They are different plants from the same family
                    (mustard/cabbage).
                  </p>
                </div>
              </div>


              <div className="post-date text-faded">
                6 hours ago
              </div>

              <div className="reactions">
                <button className="btn-xsmall">+ <i
                    className="fa fa-smile-o emoji"></i></button>
              </div>

            </div>
          </div>
        </div>

      </div>
  );
};

export default PostList;
