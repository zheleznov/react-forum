import React, {Fragment} from 'react';
import {connect} from 'react-redux';
import RegisterForm from '../../Forms/RegisterForm';
import GoogleSignUp from '../../Forms/GoogleSignUp';
import Layout from '../../Shared/Layout';
import Spinner from '../../Shared/Spinner';

const RegisterPage = ({registering}) => {
  const spinner = registering ? (<Layout><Spinner/></Layout>) : null;

  return (
      <Fragment>
        <div className="container">
          <div className="flex-grid justify-center">
            <div className="col-2">
              <RegisterForm/>
              {/*<GoogleSignUp/>*/}
            </div>
          </div>
        </div>
        {spinner}
      </Fragment>
  );
};

const mapStateToProps = ({data: {registering}}) => {
  return {
    registering,
  };
};

export default connect(mapStateToProps)(RegisterPage);
