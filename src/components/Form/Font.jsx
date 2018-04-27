import React from 'react';
import { DropDownMenu } from 'react-uwp';
import { fonts } from '../../assets';
import { UPDATE_FONT } from '../../constants';

let fontList = fonts;

const Font = ({ handleChange }) => {
  const fontChange = (value) => {
    handleChange({ field: 'fontFamily', value }, UPDATE_FONT);
    fontList = [value, ...fontList.filter(font => font !== value)];
  };
  return (
    <div className="field Font">
      <h2>Font</h2>
      <DropDownMenu itemWidth={290} values={fontList} onChangeValue={fontChange} />
    </div>
  );
};

export default Font;
