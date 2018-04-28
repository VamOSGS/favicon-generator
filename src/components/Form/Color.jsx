import React from 'react';
import { ChromePicker } from 'react-color';
import { Toggle } from 'react-uwp';
import Separator from 'react-uwp/Separator';
import { UPDATE_COLOR, BACKGROUND_COLOR, BACKGROUND } from '../../constants';

const Color = ({ update, settings }) => {
  const colorChange = color => update(color.hex, UPDATE_COLOR);
  const bgColorChange = (color) => {
    update(color.hex, BACKGROUND_COLOR);
  };
  const toggleBackground = () => {
    update(!settings.background, BACKGROUND);
  };
  return (
    <div className="field Color">
      <div className="check" onClick={toggleBackground}>
        <h2>Background</h2>
        <Toggle checked={settings.background} size={21} defaultToggled={settings.background} />
      </div>
      <Separator />
      <div className="textColor">
        <div className="heading">
          <div style={{ background: settings.text.color }} className="cover" />
          <h2>Text color</h2>
        </div>
        <ChromePicker disableAlpha color={settings.text.color} onChange={colorChange} />
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
