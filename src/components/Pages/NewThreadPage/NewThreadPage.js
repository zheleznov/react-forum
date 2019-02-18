import React, {Fragment} from 'react';

const NewThreadPage = (props) => {
  return (
      <Fragment>
        <div className="col-full push-top">

          <h1>Create new thread in <i>Cooking</i></h1>

          <form action="">
            <div className="form-group">
              <label htmlFor="thread_title">Title:</label>
              <input type="text" id="thread_title" className="form-input"
                     name="title" />
            </div>

            <div className="form-group">
              <label htmlFor="thread_content">Content:</label>
              <textarea id="thread_content" className="form-input"
                        name="content" rows="8" cols="140"></textarea>
            </div>

            <div className="btn-group">
              <button className="btn btn-ghost">Cancel</button>
              <button className="btn btn-blue" type="submit"
                      name="Publish">Publish
              </button>
            </div>
          </form>
        </div>
      </Fragment>
  );
};

export default NewThreadPage;
