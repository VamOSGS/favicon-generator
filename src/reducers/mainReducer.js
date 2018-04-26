import * as types from '../constants';

const initialState = {
  size: 128,
  text: {
    fontSize: 36,
    fontFamliy: 'Segoe UI',
    value: 'FasG',
    color: 'red',
  },
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.UPDATE_VALUE:
      return { ...state, text: { ...state.text, [action.payload.field]: action.payload.value } };

    default:
      return state;
  }
};

export default mainReducer;
