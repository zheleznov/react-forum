import React, {Fragment} from 'react';
import ForumStatsContainer from '../../Containers/Forums/ForumStatsContainer';
import RegisterForm from '../../Forms/RegisterForm';
import GoogleSignUp from '../../Forms/GoogleSignUp';

const RegisterPage = () => {
  return (
      <Fragment>
        <div className="container">
          <div className="flex-grid justify-center">
            <div className="col-2">
              <RegisterForm/>
              <GoogleSignUp/>
            </div>
          </div>
        </div>
        <ForumStatsContainer/>
      </Fragment>
  );
};

export default RegisterPage;
