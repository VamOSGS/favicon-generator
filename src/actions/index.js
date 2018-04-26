import * as types from '../constants';

export const updateText = payload => ({
  type: types.UPDATE_TEXT,
  payload,
});
export const updateBackground = payload => ({
  type: types.UPDATE_BACKGROUND,
  payload,
});
