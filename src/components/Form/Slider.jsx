import React from 'react';
import { Slider, TextBox } from 'react-uwp';
import { UPDATE_SIZE } from '../../constants';

const SliderComponent = ({ settings, handleChange }) => (
  <div className="field Size">
    <h2>Font-size</h2>
    <div>
      <Slider
        initValue={settings.text.fontSize}
        minValue={12}
        maxValue={200}
        onChangedValue={value =>
          handleChange({ field: 'fontSize', value: parseInt(value, 10) }, UPDATE_SIZE)
        }
      />
      <TextBox
        onChangeValue={value => handleChange({ field: 'fontSize', value }, UPDATE_SIZE)}
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
