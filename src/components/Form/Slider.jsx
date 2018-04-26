import React from 'react';
import { Slider, TextBox } from 'react-uwp';

const SliderComponent = ({ settings, handleChange }) => (
  <div className="field Size">
    <h2>Font-size</h2>
    <div>
      <Slider
        initValue={settings.text.fontSize}
        minValue={12}
        maxValue={200}
        onChangeValue={value => handleChange({ field: 'fontSize', value: parseInt(value, 10) })}
      />
      <TextBox
        onChangeValue={value => handleChange({ field: 'fontSize', value })}
        className="ftzInput"
        value={parseInt(settings.text.fontSize, 10)}
        type="number"
        max={200}
        min={12}
      />
    </div>
  </div>
);

export default SliderComponent;
