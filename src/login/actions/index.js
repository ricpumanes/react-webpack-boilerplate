import * as types from './types';

export const foo = () => (dispatch) => {
  return {
    type: types.FOO,
    payload: 'test',
  };
}

export const bar = () => (dispatch) => {
  return {
    type: types.BAR,
    payload: 'test',
  };
}