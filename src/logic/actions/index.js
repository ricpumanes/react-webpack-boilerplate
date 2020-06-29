import { LOGIN } from './types';
// import firebase from 'firebase';

export const usersLogin = (queryParams = {}, callbacks = {}) => {
  const { email, password } = queryParams;

  return {
    type: LOGIN.type,
    types: [LOGIN.request, LOGIN.fulfilled, LOGIN.rejected],
    shouldcallService: () => true,
    // callService: () => firebase.auth().signInWithEmailAndPassword(email, password),
    callService: () => {
      // test
      return new Promise((resolve, reject) => {
        const t = setTimeout(() => {
          clearTimeout(t);
          reject({ message: 'wakeke!' });
        }, 1000 * 3);
      });
    },
    payload: queryParams,
    callbacks,
  };
};
