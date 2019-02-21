import React, {Component} from 'react';
import Input from '../Input';

class RegisterForm extends Component {
  state = {
    name: '',
    username: '',
    email: '',
    password: '',
    avatar: '',
    formErrors: {
      name: '',
      username: '',
      email: '',
      password: '',
    },
    formValid: false,
    nameValid: false,
    usernameValid: false,
    emailValid: false,
    passwordValid: false,
  };

  onInputChange = ({target}) => {
    const {id, value} = target;

    this.setState({
      [id]: value,
    }, () => this.validateInput(id, value));
  };

  validateInput = (field, value) => {
    let formErrors = this.state.formErrors;
    let nameValid = this.state.nameValid;
    let usernameValid = this.state.usernameValid;
    let emailValid = this.state.emailValid;
    let passwordValid = this.state.passwordValid;

    switch (field) {
      case 'name':
        nameValid = value.length > 0;
        formErrors.name = nameValid ? '' : 'Full Name should be filled';
        break;

      case 'username':
        usernameValid = value.length > 0;
        formErrors.username = usernameValid ? '' : 'Username should be filled';
        break;

      case 'email':
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        formErrors.email = emailValid ? '' : 'Incorrect email';
        break;

      case 'password':
        passwordValid = value.length > 5;
        formErrors.password = passwordValid ?
            '' :
            'Password should be more than 5 symbols';
        break;

      default:
        break;
    }

    this.setState({
      formErrors,
      nameValid,
      usernameValid,
      emailValid,
      passwordValid,
    }, () => this.validateForm());
  };

  validateForm = () => {
    this.setState({
      formValid: this.state.nameValid && this.state.usernameValid &&
          this.state.emailValid && this.state.passwordValid,
    });
  };

  registerUser = (e) => {
    e.preventDefault();

  };

  render() {
    return (
        <form action="" className="card card-form" onSubmit={this.registerUser}>
          <h1 className="text-center">Register</h1>

          <Input label={'Full Name'} id={'name'} type={'text'}
                 value={this.state.name}
                 onInputChange={this.onInputChange}
                 inputError={this.state.formErrors.name}
          />

          <Input label={'Username'} id={'username'} type={'text'}
                 value={this.state.username}
                 onInputChange={this.onInputChange}
                 inputError={this.state.formErrors.username}
          />

          <Input label={'Email'} id={'email'} type={'email'}
                 value={this.state.email}
                 onInputChange={this.onInputChange}
                 inputError={this.state.formErrors.email}
          />

          <Input label={'Password'} id={'password'} type={'password'}
                 value={this.state.password}
                 onInputChange={this.onInputChange}
                 inputError={this.state.formErrors.password}
          />

          <Input label={'Avatar'} id={'avatar'} type={'text'}
                 value={this.state.avatar}
                 onInputChange={this.onInputChange}
          />

          <div className="form-actions">
            <button
                type="submit" className="btn-blue btn-block"
                disabled={!this.state.formValid}>Register
            </button>
          </div>
        </form>
    );
  }
}

export default RegisterForm;
