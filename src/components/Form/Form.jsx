import React from 'react';
import Text from './Text';
import Slider from './Slider';
import Font from './Font';
import Color from './Color';
import './FormStyles.less';

const Form = ({ update, settings }) => (
  <div className="Form">
    <Text handleChange={update} settings={settings} />
    <Slider handleChange={update} settings={settings} />
    <Font handleChange={update} />
    <Color settings={settings} update={update} />
  </div>
);

export default Form;
