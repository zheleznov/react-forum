import React from 'react';
import PropTypes from 'prop-types';
import './Input.css';

const Input = (props) => {
  const {label, id, type, placeholder, value, onInputChange, inputError} = props;
  let errorMessage = null;

  if (inputError) {
    errorMessage = <p className="input-error">{inputError}</p>;
  }

  return (
      <div className="form-group">
        <label htmlFor={id}>{label}</label>
        <input
            id={id}
            type={type}
            className="form-input"
            placeholder={placeholder}
            value={value}
            onChange={(e) => onInputChange(e)}
        />
        {errorMessage}
      </div>
  );
};

Input.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  onInputChange: PropTypes.func,
  inputError: PropTypes.string,
};

export default Input;
