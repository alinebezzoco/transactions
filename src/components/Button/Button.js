import React from "react";
import PropTypes from 'prop-types';
import "./Button.css";

const Button = props => {
  return (
    <button
      className={
        props.type === "primary" ? "btn-primary" : "btn-secondary"
      }
      onClick={props.action}
      disabled={props.disabled}
    >
      {props.title}
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.string,
  action: PropTypes.func, 
  disabled: PropTypes.bool, 
  title: PropTypes.string
}

export default Button;
