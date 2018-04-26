// flow
import React, { Component } from 'react';
import { TextBox } from 'react-uwp';
import './FormStyles.less';

const Form = ({ updateValue, settings }) => {
  const handleChange = field => (e) => {
    updateValue({ field, value: e.target.value });
  };
  return (
    <div className="Form">
      <h2>form</h2>
      <TextBox
        onChange={handleChange('value')}
        background="none"
        defaultValue={settings.text.value}
      />
    </div>
  );
};

export default Form;
