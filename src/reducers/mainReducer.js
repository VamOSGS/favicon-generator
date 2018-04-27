import * as types from '../constants';
import { fonts } from '../assets';

const initialState = {
  size: 128,
  backgroundColor: '#0078D7',
  text: {
    fontSize: 64,
    fontFamily: fonts[0],
    value: 'F',
    color: 'white',
    offsetX: 44,
  },
};
initialState.text.offsetY = initialState.text.fontSize;
const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.UPDATE_TEXT:
      return { ...state, text: { ...state.text, value: action.payload.value } };
    case types.UPDATE_COLOR:
      return { ...state, text: { ...state.text, color: action.payload.value } };
    case types.UPDATE_FONT:
      return { ...state, text: { ...state.text, fontFamily: action.payload.value } };
    case types.UPDATE_SIZE:
      return {
        ...state,
        text: { ...state.text, offsetY: action.payload.value, fontSize: action.payload.value },
      };
    case types.UPDATE_BACKGROUND:
      return { ...state, [action.payload.field]: action.payload.value };
    default:
      return state;
  }
};

export default mainReducer;
