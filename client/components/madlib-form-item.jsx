import React from 'react';

export default function MadlibFormItem(props) {
  const { id, label, handleChange } = props;
  return (
    <div className="form-group col-12 col-md-6">
      <label htmlFor={id} className="label">{label}</label>
      <input type="text" className="form-control" id={id} onChange={handleChange}/>
    </div>
  );
}
