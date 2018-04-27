import * as types from '../constants';

export const update = (payload, type) => ({
  type,
  payload,
});

export const updateBackground = payload => ({
  type: types.UPDATE_BACKGROUND,
  payload,
});
