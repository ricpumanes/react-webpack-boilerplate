# react-webpack-boilerplate
A Boilerplate for ReactJS + Webpack 4 + React Router 4 and Redux

## Usage

**clone the repo using SSH:**
```javascript
git clone git@github.com:ricpumanes/react-webpack-boilerplate.git
```
or

**clone the repo using HTTPS:**
```javascript
git clone https://github.com/ricpumanes/react-webpack-boilerplate.git
```

**install dependencies**
```javascript
npm install
```

**start the app locally (development mode):**
```javascript
npm run dev
```

**build (production mode):**
```javascript
npm run prod
```

**test:**
```javascript
npm test
```

**watch test:**
```javascript
npm run test:watch
```

**Testing Async (with Feathers JS):**

```javascript
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk'; // if you are using thunk middleware
import * as actions from 'path-to-module-actions';
import app from 'path-to-my-feathers-config';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);
const store = mockStore();

const userAccount = {
  email: 'test@testing.com',
  password: '12345678',
};

describe("Login Async Action", () => {
  it("should return AUTH_LOGIN_SUCCESS if Login was successful", () => {
    const expected = [
      { type: 'AUTH_LOGIN', payload: userAccount },
      { type: 'AUTH_LOGIN_SUCCESS', payload: userAccount },
    ];
    // stab the service
    app.authenticate = jest.fn(() => {
      return Promise.resolve();
    });
    
    return store.dispatch(actions.login(userAccount)).then(() => {
      expect(store.getActions()).toEqual(expected);
    });
  });
});

```

**TODO:**
- linting
- simulate prod