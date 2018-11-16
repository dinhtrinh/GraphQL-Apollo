import React from 'react';
import { Input } from 'reactstrap';

const renderField = {
  input : ({input, placeholder, type, options, rows }) => (<Input type={type} {...options} {...input} placeholder={placeholder} rows={rows}/>)                      
};

export default renderField;
