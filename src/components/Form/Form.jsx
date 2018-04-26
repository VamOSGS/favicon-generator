// flow
import React, { Component } from 'react';
import { TextBox, Slider } from 'react-uwp';
import './FormStyles.less';

const Form = ({ updateValue, settings }) => {
  const handleChange = (params) => {
    updateValue(params);
  };
  return (
    <div className="Form">
      <h2>form</h2>
      <TextBox
        onChangeValue={value => handleChange({ field: 'value', value })}
        background="none"
        defaultValue={settings.text.value}
      />
      <div>
        <Slider
          numberToFixed={2}
          initValue={32}
          minValue={12}
          maxValue={200}
          onChangeValue={value => handleChange({ field: 'fontSize', value })}
        />
        <span>nice</span>
      </div>
    </div>
  );
};

export default Form;
