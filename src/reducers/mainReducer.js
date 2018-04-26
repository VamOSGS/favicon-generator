import * as types from '../constants';
import fonts from '../assets/fonts';

const initialState = {
  size: 128,
  backgroundColor: 'black',
  text: {
    fontSize: 36,
    fontFamily: fonts[0],
    value: 'F',
    color: 'red',
  },
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.UPDATE_TEXT:
      return { ...state, text: { ...state.text, [action.payload.field]: action.payload.value } };
    case types.UPDATE_BACKGROUND:
      return { ...state, [action.payload.field]: action.payload.value };
    default:
      return state;
  }
};

export default mainReducer;
