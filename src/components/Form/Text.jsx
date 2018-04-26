import React from 'react';
import { TextBox } from 'react-uwp';

const Text = ({ handleChange, settings }) => (
  <div className="field Text">
    <h2>Text</h2>
    <TextBox
      onChangeValue={value => handleChange({ field: 'value', value })}
      background="none"
      defaultValue={settings.text.value}
    />
  </div>
);

export default Text;
