import React from 'react';

// Input form groups for search form

const FormGroup = (props) => (
  <div className="form-group">
    <label for={`input-${props.name}`}>{props.displayName}</label>
    <input 
      type="text" 
      className="form-control" 
      name={props.name}
      id={`input-${props.name}`} 
      placeholder={props.displayName} />
  </div>
)

export default FormGroup;
