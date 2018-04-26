import React from 'react';
import Text from './Text';
import Slider from './Slider';
import Font from './Font';
import Color from './Color';
import './FormStyles.less';

const Form = ({ updateText, updateBackground, settings }) => {
  const handleChange = (params) => {
    updateText(params);
  };
  return (
    <div className="Form">
      <Text handleChange={handleChange} settings={settings} />
      <Slider handleChange={handleChange} settings={settings} />
      <Font handleChange={handleChange} />
      <Color updateBackground={updateBackground} settings={settings} updateText={updateText} />
    </div>
  );
};

export default Form;
