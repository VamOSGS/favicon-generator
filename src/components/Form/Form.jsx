// flow
import React, { Component } from 'react';
import { TextBox, Slider, DropDownMenu } from 'react-uwp';
import { ChromePicker } from 'react-color';
import fonts from '../../assets/fonts';
import './FormStyles.less';

const Form = ({ updateText, updateBackground, settings }) => {
  const handleChange = (params) => {
    updateText(params);
  };
  const colorChange = (color) => {
    updateText({ field: 'color', value: color.hex });
  };
  const bgColorChange = (color) => {
    updateBackground({ field: 'backgroundColor', value: color.hex });
  };
  return (
    <div className="Form">
      <div className="field Text">
        <h2>Text</h2>
        <TextBox
          onChangeValue={value => handleChange({ field: 'value', value })}
          background="none"
          defaultValue={settings.text.value}
        />
      </div>
      <div className="field Font">
        <h2>Font</h2>
        <DropDownMenu
          values={fonts}
          onChangeValue={(value) => {
            console.log('nice')
            handleChange({ field: 'fontFamily', value });
          }}
          // onChangeValue={value => handleChange({ field: 'fontFamily', value })}
        />
      </div>
      <div className="field Font-size">
        <h2>Font-size</h2>
        <Slider
          initValue={settings.text.fontSize}
          minValue={12}
          maxValue={200}
          onChangeValue={value => handleChange({ field: 'fontSize', value })}
        />
        <span>
          <DropDownMenu values={[settings.text.fontSize.toFixed(0), 'A', 'a']} />
        </span>
      </div>
      <div className="field Color">
        <div>
          <h2>Text color:</h2>
          <ChromePicker disableAlpha color={settings.text.color} onChange={colorChange} />
        </div>
        <div>
          <h2>Background color:</h2>
          <ChromePicker disableAlpha color={settings.backgroundColor} onChange={bgColorChange} />
        </div>
      </div>
    </div>
  );
};

export default Form;
