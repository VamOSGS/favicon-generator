import React from 'react';
import { ChromePicker } from 'react-color';
import { Toggle, Icon } from 'react-uwp';
import Separator from 'react-uwp/Separator';
import { UPDATE_COLOR } from '../../constants';

const Color = ({ updateText, updateBackground, settings }) => {
  const colorChange = color => updateText(color.hex, UPDATE_COLOR);
  const bgColorChange = (color) => {
    updateBackground({ field: 'backgroundColor', value: color.hex });
  };
  const toggleBackground = () => {
    updateBackground({ field: 'background', value: !settings.background });
  };
  return (
    <div className="field Color">
      <div className="textColor">
        <div className="heading">
          <div style={{ background: settings.text.color }} className="cover" />
          <h2>Text color</h2>
        </div>
        <ChromePicker disableAlpha color={settings.text.color} onChange={colorChange} />
      </div>
      <Separator disabled />
      <div className="check" onClick={toggleBackground}>
        <h2>Background</h2>
        <Toggle checked={settings.background} size={21} defaultToggled={settings.background} />
      </div>
      {settings.background && (
        <div className="bgColor">
          <div className="heading">
            <div style={{ background: settings.backgroundColor }} className="cover" />
            <h2>Background color</h2>
          </div>
          <ChromePicker disableAlpha color={settings.backgroundColor} onChange={bgColorChange} />
        </div>
      )}
    </div>
  );
};

export default Color;
