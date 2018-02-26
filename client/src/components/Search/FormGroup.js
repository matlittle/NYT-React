import React from 'react';

// Input form groups for search form

const FormGroup = props => (
  <div className="form-group">
    <label htmlFor={`input-${props.name}`}>{props.display}</label>
    <input 
      type="text" 
      className="form-control" 
      id={`input-${props.name}`} 
      {...props} />
  </div>
)

export default FormGroup;
