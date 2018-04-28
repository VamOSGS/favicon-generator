import React from 'react';
import { DropDownMenu } from 'react-uwp';
import { fonts } from '../../assets';
import { UPDATE_FONT } from '../../constants';

let fontList = fonts;

const Font = ({ handleChange }) => {
  const fontChange = (value) => {
    handleChange(value, UPDATE_FONT);
    fontList = [value, ...fontList.filter(font => font !== value)];
  };
  return (
    <div className="field Font">
      <h2>Font</h2>
      <DropDownMenu itemHeight={40} itemWidth={302} values={fontList} onChangeValue={fontChange} />
    </div>
  );
};

export default Font;
