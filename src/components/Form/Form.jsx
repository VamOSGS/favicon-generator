// flow
import React, { Component } from 'react';
import { TextBox, Slider } from 'react-uwp';
import { ChromePicker } from 'react-color';
import './FormStyles.less';

const Form = ({ updateValue, settings }) => {
  const handleChange = (params) => {
    updateValue(params);
  };
  const colorChange = (color, event) => {
    updateValue({ field: 'color', value: color.hex });
  };
  return (
    <div className="Form">
      <TextBox
        onChangeValue={value => handleChange({ field: 'value', value })}
        background="none"
        defaultValue={settings.text.value}
      />
      <div>
        <Slider
          initValue={settings.text.fontSize}
          minValue={12}
          maxValue={200}
          onChangeValue={value => handleChange({ field: 'fontSize', value })}
        />
        <span>{settings.text.fontSize.toFixed(0)}px</span>
      </div>
      <ChromePicker color={settings.text.color} onChange={colorChange} />
    </div>
  );
};

export default Form;
