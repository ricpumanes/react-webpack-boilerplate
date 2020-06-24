# react-webpack-boilerplate

A Boilerplate for ReactJS + Webpack 4 + React Router 4 and Redux

#### Tech used:

- [Babel 7](https://babeljs.io/docs/en/index.html)
- [React 16](https://reactjs.org/)
- [Redux 4](https://redux.js.org/)
- [React Router Dom (React Router 4)](https://reacttraining.com/react-router/web/guides/philosophy)
- [Webpack 4](https://webpack.js.org/concepts/)
- [Feathers](https://docs.feathersjs.com/)
- [Tailwind](https://tailwindcss.com/docs)
- [Styled Components](https://styled-components.com/)

#### Testing

- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro)
- [Jest](https://jestjs.io/docs/en/getting-started)

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
import configureStore from "redux-mock-store";
import thunk from "redux-thunk"; // if you are using thunk middleware
import * as actions from "path-to-module-actions";
import app from "path-to-my-feathers-config";

const middlewares = [thunk];
const mockStore = configureStore(middlewares);
const store = mockStore();

const userAccount = {
  email: "test@testing.com",
  password: "12345678",
};

describe("Login Async Action", () => {
  it("should return AUTH_LOGIN_SUCCESS if Login was successful", () => {
    const expected = [
      { type: "AUTH_LOGIN", payload: userAccount },
      { type: "AUTH_LOGIN_SUCCESS", payload: userAccount },
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

**Simulate Production Build**

**_1. build project first_**

```javascript
npm run prod
```

**_2. generate self-signed certificates (key and cert)_**

```javascript
openssl req -nodes -new -x509 -keyout server.key -out server.cert
```

**_3. simulate_**

```javascript
npm run simulate
```

Finally, open on app on https://localhost:5000 or on the PORT you set

## Extending TailwindCSS Fonts and Colors:

### FONT FAMILY

```markdown
1. Download font from google font or wherever
2. Copy and paste the font folder to `public/assets/fonts`
3. Open `public/assets/styles/_fonts.scss`
4. Follow the implementation on adding a new font
5. Go to `tailwind.config.js` and add a new property on `extend.fontFamily` object (the property is the name of the font)
6. Rebuild/restart the project `npm start`
7. Use as "font-<nameOfFontFamily>"
```

### COLORS

```markdown
1. Go to `tailwind.config.js` and add a new property on `extend.colors` object
2. The name of the color should start with `cstm-` (e.g. cstm-blue-1)
3. Use as "text-cstm-blue-1" or "bg-cstm-blue-1"
```
