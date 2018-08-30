import * as types from '../actions/types';

export default (state = {}, {
  type,
  payload
}) => {
  switch(type) {
    case types.FOO:
      return { ...state, payload };
    case types.BAR:
      return { ...state, payload };
    default:
      return { ...state };
  }
}
