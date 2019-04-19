import React from 'react';
import PropTypes from 'prop-types';

const Field = ({ name, type, label, msgs, validation, cleanFields= f => f }) => 
  <p className="field">
    <label className="field__label" forhtml={name}>
      <span className="field-label">{label}</span>
    </label>
    <input className={`field__input field-input t-input-${name}`} type={type} name={name} onChange={cleanFields}/>
    <span className={`field__error field-error t-error-${name}`}>
      { msgs[validation[name]] ? msgs[validation[name]] : '' }
    </span>
  </p>

Field.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  label: PropTypes.string
}

export default Field;
