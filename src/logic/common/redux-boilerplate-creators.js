/**
 * @param {String} type = 'send'
 * @returns () => ({})
 */
export const makeAction = (type) => {
  return function (...args) {
    const action = { type };
    action.payload = args[0];
    return action;
  };
};

/**
 * @param {String} initialConstant = e.g. 'send_email'
 * @returns { SEND_REQUEST, SEND_FULFILLED, SEND_REJECTED }
 */
export const makeConstant = (initialConstant) => {
  if (!initialConstant) return {};
  const constant = initialConstant.toUpperCase();
  const constantObj = {};
  const request = `${constant}_REQUEST`;
  const fulfilled = `${constant}_FULFILLED`;
  const rejected = `${constant}_REJECTED`;
  constantObj.type = constant;
  constantObj.fulfilled = fulfilled;
  constantObj.rejected = rejected;
  constantObj.request = request;
  return constantObj;
};

/**
 * @param {Object} initialState = { isLoading: false, etc... }
 * @param {Object} handlers = { 'TEST_ADD_SOMETHING': (state, action) => {} }
 */
export const makeReducer = (initialState, handlers) => {
  return function reducer(state = initialState, action) {
    if (handlers.hasOwnProperty(action.type)) {
      return handlers[action.type](state, action);
    }
    return { ...state };
  };
};
