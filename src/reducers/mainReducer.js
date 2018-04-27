import * as types from '../constants';
import { fonts } from '../assets';
import { calculateWidth } from '../utils';

const initialState = {
  size: 128,
  backgroundColor: '#0078D7',
  text: {
    fontSize: 64,
    fontFamily: fonts[0],
    value: 'F',
    color: 'white',
    textWidth: 44,
  },
};
const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.UPDATE_TEXT:
      return {
        ...state,
        text: {
          ...state.text,
          value: action.payload.value,
          textWidth: calculateWidth(
            action.payload.value,
            state.text.fontFamily,
            state.text.fontSize,
          ),
        },
      };
    case types.UPDATE_COLOR:
      return { ...state, text: { ...state.text, color: action.payload.value } };
    case types.UPDATE_FONT:
      return { ...state, text: { ...state.text, fontFamily: action.payload.value } };
    case types.UPDATE_SIZE:
      console.log(calculateWidth(action.payload.value, state.text.fontFamily, state.text.fontSize));
      return {
        ...state,
        text: {
          ...state.text,
          textWidth: calculateWidth(
            action.payload.value,
            state.text.fontFamily,
            state.text.fontSize,
          ),
          fontSize: action.payload.value,
        },
      };
    case types.UPDATE_BACKGROUND:
      return { ...state, [action.payload.field]: action.payload.value };
    default:
      return state;
  }
};

export default mainReducer;
