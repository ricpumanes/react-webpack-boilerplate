export default ({ dispatch, getState }) => (next) => (action) => {
  const { types, callService, shouldcallService = () => true, payload = {}, callbacks = {} } = action;
  const { onSuccess = null, onFail = null } = callbacks;
  if (!types) return next(action);

  if (!Array.isArray(types) || types.length !== 3 || !types.every((type) => typeof type === 'string')) {
    throw new Error(`Expected an array of three string types. [${types}]`);
  }

  if (typeof callService !== 'function') throw new Error('Expected callService ßto be a function.');

  if (!shouldcallService(getState())) return;

  const [requestType, successType, failureType] = types;

  dispatch({ type: requestType, payload });

  return callService()
    .then((response) => {
      dispatch({ type: successType, payload: response });
      if (onSuccess) onSuccess(response);
    })
    .catch((error) => {
      dispatch({ type: failureType, payload: error });
      if (onFail) onFail(error);
    });
};
