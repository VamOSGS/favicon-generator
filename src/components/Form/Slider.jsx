import React from 'react';
import { Slider, DropDownMenu } from 'react-uwp';

const SliderComponent = ({ settings, handleChange }) => (
  <div className="field Size">
    <h2>Font-size</h2>
    <Slider
      initValue={settings.text.fontSize}
      minValue={12}
      maxValue={200}
      onChangeValue={value => handleChange({ field: 'fontSize', value })}
    />
    <span>
      <DropDownMenu itemWidth={60} values={[settings.text.fontSize.toFixed(0), 'A', 'a']} />
    </span>
  </div>
);

export default SliderComponent;
