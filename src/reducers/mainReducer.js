import * as types from '../constants';
import { fonts } from '../assets';
import { calculateWidth } from '../utils';

const initialState = {
  size: 128,
  backgroundColor: '#0078D7',
  useTextNode: false,
  text: {
    fontSize: 64,
    fontFamily: fonts[0],
    value: 'F',
    color: 'white',
  },
};
initialState.text.textWidth = calculateWidth(
  initialState.text.value,
  fonts[0],
  initialState.text.fontSize,
);
const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.UPDATE_TEXT:
      return {
        ...state,
        useTextNode: false,
        text: {
          ...state.text,
          value: action.payload,
          textWidth: calculateWidth(
            action.payload,
            state.text.fontFamily,
            state.text.fontSize,
          ),
        },
      };
    case types.UPDATE_COLOR:
      return {
        ...state,
        text: { ...state.text, color: action.payload },
      };
    case types.UPDATE_FONT:
      return {
        ...state,
        useTextNode: false,
        textWidth: calculateWidth(state.text.value, action.payload.value, state.text.fontSize),
        text: { ...state.text, fontFamily: action.payload.value },
      };
    case types.UPDATE_SIZE:
      console.log(action);
      return {
        ...state,
        useTextNode: true,
        text: {
          ...state.text,
          textWidth: calculateWidth(state.text.value, state.text.fontFamily, action.payload),
          fontSize: action.payload,
        },
      };
    case types.UPDATE_BACKGROUND:
      return { ...state, [action.payload.field]: action.payload.value };
    default:
      return state;
  }
};

export default mainReducer;
