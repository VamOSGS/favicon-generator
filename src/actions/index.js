import * as types from '../constants';

export const updateValue = payload => ({
  type: types.UPDATE_VALUE,
  payload,
});
export const test = payload => ({
  type: types.TEST,
  payload,
});
