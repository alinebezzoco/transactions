import React from "react";
import PropTypes from 'prop-types';
import "./Input.css";

const Input = props => {
  return (
    <div className="form-group">
      <label htmlFor={props.name} className="form-label">
        {props.title}
      </label>
      <input
        className="form-input"
        id={props.name}
        name={props.name}
        type={props.type}
        value={props.value}
        onChange={props.handleChange}
        placeholder={props.placeholder}
        required={props.required}
      />
    </div>
  );
};

Input.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string, 
  value: PropTypes.any, 
  handleChange: PropTypes.func, 
  placeholder: PropTypes.string, 
  required: PropTypes.bool
};

export default Input;
