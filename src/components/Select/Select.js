import React from "react";
import PropTypes from 'prop-types';
import "./Select.css";

const Select = props => {
  return (
    <div className="form-group">
      <label htmlFor={props.name}> {props.title} </label>
      <select
        id={props.name}
        name={props.name}
        value={props.value}
        onChange={props.handleChange}
        className="form-control"
        required={props.required}
      >
        <option value="" disabled>
          {props.placeholder}
        </option>
        {props.options.map(option => {
          return (
            <option key={option} value={option} label={option}>
              {option}
            </option>
          );
        })}
      </select>
    </div>
  );
};

Select.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string, 
  value: PropTypes.string, 
  handleChange: PropTypes.func, 
  placeholder: PropTypes.string, 
  required: PropTypes.bool,
  option: PropTypes.string
};


export default Select;
