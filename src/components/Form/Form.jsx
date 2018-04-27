import React from 'react';
import Text from './Text';
import Slider from './Slider';
import Font from './Font';
import Color from './Color';
import './FormStyles.less';

const Form = ({ updateText, updateBackground, settings }) => (
  <div className="Form">
    <Text handleChange={updateText} settings={settings} />
    <Slider handleChange={updateText} settings={settings} />
    <Font handleChange={updateText} />
    <Color updateBackground={updateBackground} settings={settings} updateText={updateText} />
  </div>
);

export default Form;
