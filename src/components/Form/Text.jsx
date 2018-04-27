import React from 'react';
import { TextBox } from 'react-uwp';
import { UPDATE_TEXT } from '../../constants';

const Text = ({ handleChange, settings }) => {
  const change = (value) => {
    handleChange({ field: 'value', value }, UPDATE_TEXT);
  };
  return (
    <div className="field Text">
      <h2>Text</h2>
      <TextBox
        onChangeValue={value => change(value)}
        background="none"
        defaultValue={settings.text.value}
      />
    </div>
  );
};

export default Text;
