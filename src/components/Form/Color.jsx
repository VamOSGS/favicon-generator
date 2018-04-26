import React from 'react';
import { ChromePicker } from 'react-color';
import fonts from '../../assets/fonts';

const fontList = fonts;

const Font = ({ updateText, updateBackground, settings }) => {
  const colorChange = (color) => {
    updateText({ field: 'color', value: color.hex });
  };
  const bgColorChange = (color) => {
    updateBackground({ field: 'backgroundColor', value: color.hex });
  };
  return (
    <div className="field Color">
      <div>
        <h2>Text color</h2>
        <ChromePicker disableAlpha color={settings.text.color} onChange={colorChange} />
      </div>
      <div>
        <h2>Background color</h2>
        <ChromePicker disableAlpha color={settings.backgroundColor} onChange={bgColorChange} />
      </div>
    </div>
  );
};

export default Font;
